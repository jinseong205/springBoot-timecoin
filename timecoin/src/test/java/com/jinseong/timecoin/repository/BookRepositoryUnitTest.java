package com.jinseong.timecoin.repository;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import lombok.extern.slf4j.Slf4j;

//단위테스트 (DB 관련된 Bean이 메모리에 등록되면 됨) 

@Slf4j
@Transactional
@ActiveProfiles("test")
@AutoConfigureTestDatabase(replace = Replace.ANY)   // 실제DB테스트 Replace.NONE, 내장DB테스트 Replace.ANY
@DataJpaTest
public class BookRepositoryUnitTest {

	@Autowired
	private BookRepository bookRepository;
}
	