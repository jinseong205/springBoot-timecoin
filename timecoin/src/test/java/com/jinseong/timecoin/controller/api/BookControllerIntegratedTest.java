package com.jinseong.timecoin.controller.api;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.web.servlet.MockMvc;

import com.jinseong.timecoin.service.BookService;

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

	
	@Test
	public void saveTest(){
		log.info("saveTest() 시작==================");
	}
}
