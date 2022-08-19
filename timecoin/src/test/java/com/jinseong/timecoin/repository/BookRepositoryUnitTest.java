package com.jinseong.timecoin.repository;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

//단위테스트 (DB 관련된 Bean이 메모리에 등록되면 됨) 

@Transactional
@AutoConfigureTestDatabase(replace=Replace.NONE)//any 가짜db, none 실제 DB
@DataJpaTest
public class BookRepositoryUnitTest {

	@Autowired
	private BookRepository bookRepository;
}
