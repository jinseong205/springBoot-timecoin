package com.jinseong.timecoin.controller.api;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
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
		when(bookService.save(book)).thenReturn(new Book(1L, "스프링 따라하기", "진성"));

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
}
