package com.jinseong.timecoin.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.Arrays;
import java.util.List;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import com.jinseong.timecoin.model.Book;

import lombok.extern.slf4j.Slf4j;

//단위테스트 (DB 관련된 Bean이 메모리에 등록되면 됨) 

@Slf4j
@Transactional
@ActiveProfiles("test")
@AutoConfigureTestDatabase(replace = Replace.NONE)   // 실제DB테스트 Replace.NONE, 내장DB테스트 Replace.ANY
@DataJpaTest
public class BookRepositoryUnitTest {

	@Autowired
	private BookRepository bookRepository;
	
	@Test
	public void saveTest() {
		// given
		Book book = new Book(null, "책제목1", "책저자1");
		
		// when
		Book bookEntity = bookRepository.save(book);
	
		// then
		assertEquals("책제목1", bookEntity.getTitle());
	}
	
	@Test
	public void findAllTest() {
		// given
		bookRepository.saveAll(
				Arrays.asList(
						new Book(null, "스프링부트 따라하기", "코스"),
						new Book(null, "리엑트 따라하기", "코스")
				)
			);
		
		// when
		List<Book> bookEntitys = bookRepository.findAll();
		
		// then
		log.info("bookEntitys : "+bookEntitys.size() );
		assertNotEquals(0, bookEntitys.size());
		assertEquals(5, bookEntitys.size());
	}
	
}
	