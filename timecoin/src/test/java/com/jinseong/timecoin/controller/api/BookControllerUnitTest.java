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

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jinseong.timecoin.model.Book;
import com.jinseong.timecoin.service.BookService;

import lombok.extern.slf4j.Slf4j;

//단위테스트 (Controller, Filter, Controller Advice 만 테스트) 
@Slf4j
@WebMvcTest
public class BookControllerUnitTest {

	@Autowired
	private MockMvc mockMvc;

	@MockBean // IoC 환경에 bean 등록됨
	private BookService bookService;

	// BDDMockito 패턴 given, when, then
	@Test
	public void saveTest() throws Exception {
		log.info("saveTest() 시작====================================");

		// given (테스트 하기를 위한 준비)
		Book book = new Book(null, "스프링 따라하기", "진성");
		String content = new ObjectMapper().writeValueAsString(book);
		when(bookService.save(book)).thenReturn(new Book(null, "스프링 따라하기", "진성"));

		// when (테스트 실행)
		ResultActions resultAction = mockMvc
				.perform(post("/book")
				.contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(content)
				.accept(MediaType.APPLICATION_JSON_VALUE)
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
		books.add(new Book(1L, "스프링 따라하기", "진성"));
		books.add(new Book(2L, "리액트 따라하기", "푸른"));
		when(bookService.findAll()).thenReturn(books);
		
		//when
		ResultActions resultAction = mockMvc
				.perform(get("/book")
				.accept(MediaType.APPLICATION_JSON_VALUE)
				);
		
		//then
		resultAction
			.andExpect(status().isOk())
			.andExpect(jsonPath("$",Matchers.hasSize(2)))
			.andExpect(jsonPath("$[0].title").value("스프링 따라하기"))
			.andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void findByIdTest() throws Exception{
		//given
		Long id = 1L;
		Book book = new Book(1L, "자바 공부하기", "진성");
		when(bookService.findById(id)).thenReturn(book);
		
		//when
		ResultActions resultAction = mockMvc
				.perform(get("/book/{id}",id)
				.accept(MediaType.APPLICATION_JSON_VALUE)
				);
		
		//then
		resultAction
			.andExpect(status().isOk())
			.andExpect(jsonPath("$.title").value("자바 공부하기"))
			.andDo(MockMvcResultHandlers.print());
	}
	
	
	@Test
	public void updateTest() throws Exception{
		
		//given
		Long id = 1L;
		Book book = new Book(null, "C 따라하기", "진성");
		String content = new ObjectMapper().writeValueAsString(book);
		when(bookService.update(id,book)).thenReturn(new Book(1L,"C 따라하기", "진성"));
		
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
			.andExpect(jsonPath("$.title").value("C 따라하기"))
			.andDo(MockMvcResultHandlers.print());
	}
	
	
	@Test
	public void deleteTest() throws Exception{
		
		//given
		Long id = 1L;
		when(bookService.delete(id)).thenReturn("ok");
		
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
