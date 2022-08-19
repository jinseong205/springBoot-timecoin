package com.jinseong.timecoin.controller.api;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.log;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import com.jinseong.timecoin.service.BookService;

import lombok.extern.slf4j.Slf4j;

//단위테스트 (Controller, Filter, Controller Advice 만 테스트) 
@Slf4j
@WebMvcTest
public class BookControllerUnitTest {
	
	@Autowired 
	private MockMvc mockMvc;
	
	@Mock
	private BookService service;
	
	@Test
	public void saveTest(){
		log.info("saveTest() 시작==================");
	}
}
