package com.jinseong.timecoin.controller.api;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jinseong.timecoin.model.Book;
import com.jinseong.timecoin.repository.BookRepository;

import lombok.extern.slf4j.Slf4j;

/*
 * 통합테스트 (모든 Bean들을 똑같이 IoC 올리고 테스트 하는것)
 * WebEnvironment.MOCK 실제 톰캣을 올리는게 아니라, 다른 톰캣으로 테스트
 * WebEnvironment.RANDOM_PORT = 실제 톰캣으로 테스트
 * @AutoConfigureMockMvc MockMc를 Ioc에 등록해줌
 * @Transactional 각 각의 테스트 함수가 종료 될 때 마다 트랜잭션을 rollback 해주는 어노테이션
 */
@Slf4j
@Transactional
@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = WebEnvironment.MOCK) 
public class BookControllerIntegratedTest {
	
	@Autowired
	private MockMvc mockMvc;
	
	@Autowired
	private BookRepository bookRepository;

	
	@Autowired
	private EntityManager entityManager;
	
	@BeforeEach
	public void init() {
		//entityManager.createNativeQuery("ALTER TABLE book AUTO_INCREMENT = 1").executeUpdate();
	}
	
	// BDDMockito 패턴 given, when, then
	@Test
	public void saveTest() throws Exception {

		log.info("saveTest() 시작====================================");

		// given (테스트 하기를 위한 준비)
		Book book = new Book(null, "스프링 따라하기", "진성");
		String content = new ObjectMapper().writeValueAsString(book);

		// when (테스트 실행)
		ResultActions resultAction = mockMvc
				.perform(post("/book")
				.contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(content).accept(MediaType.APPLICATION_JSON_VALUE)
				);

		//then (검증)
		resultAction
			.andExpect(status().isCreated())
			.andExpect(jsonPath("$.title").value("스프링 따라하기"))		//jsonPath 확인
			.andDo(MockMvcResultHandlers.print());	
		
	}
	
	@Test
	public void findAllTest() throws Exception{
		//given
		List<Book>books = new ArrayList<>();
		books.add(new Book(null, "스프링 따라하기", "진성"));
		books.add(new Book(null, "리액트 따라하기", "푸른"));
		bookRepository.saveAll(books);
		
		//when
		ResultActions resultAction = mockMvc
				.perform(get("/book")
				.accept(MediaType.APPLICATION_JSON_VALUE)
				);
		
		//then
		resultAction
			.andExpect(status().isOk())
			.andExpect(jsonPath("$",Matchers.hasSize(5)))
			//.andExpect(jsonPath("$[0].title").value("스프링 따라하기"))
			.andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void findByIdTest() throws Exception{
		//given
		Long id = 1L;
		
		List<Book>books = new ArrayList<>();
		books.add(new Book(null, "스프링 따라하기", "진성"));
		books.add(new Book(null, "리액트 따라하기", "푸른"));
		bookRepository.saveAll(books);
		
		//when
		ResultActions resultAction = mockMvc
				.perform(get("/book/{id}",id)
				.accept(MediaType.APPLICATION_JSON_VALUE)
				);
		
		//then
		resultAction
			.andExpect(status().isOk())
			.andExpect(jsonPath("$.title").value("eee"))
			.andDo(MockMvcResultHandlers.print());
	}
	
	
	@Test
	public void updateTest() throws Exception{
		
		//given
		Long id = 2L;
		Book book = new Book(null, "C 따라하기", "진성");
		String content = new ObjectMapper().writeValueAsString(book);
		
		//when
		ResultActions resultAction = mockMvc
				.perform(put("/book/{id}",id)
				.contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(content)
				.accept(MediaType.APPLICATION_JSON_VALUE)
				);
		
		//then
		resultAction
			.andExpect(status().isOk())
			.andExpect(jsonPath("$.id").value("2L"))
			.andExpect(jsonPath("$.title").value("C 따라하기"))
			.andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void deleteTest() throws Exception{
		
		//given
		Long id = 1L;
		
		//when
		ResultActions resultAction = mockMvc
				.perform(delete("/book/{id}",id)
				.accept(MediaType.TEXT_PLAIN)
				);
		
		//then
		resultAction
			.andExpect(status().isOk())
			.andDo(MockMvcResultHandlers.print());
		
		MvcResult reqResult = resultAction.andReturn();
		String result = reqResult.getResponse().getContentAsString();
		
		assertEquals("ok",result);
	}
	
}
