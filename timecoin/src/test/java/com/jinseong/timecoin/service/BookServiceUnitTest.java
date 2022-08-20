package com.jinseong.timecoin.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.jinseong.timecoin.model.Book;
import com.jinseong.timecoin.repository.BookRepository;


/*
* 단위테스트 (Service와 관련된 애들만 메모리에 등록되면 됨) 
* BoardReposiotry => 가짜 객체로 만들 수 있음
*/
@ExtendWith(MockitoExtension.class) // 작은 단위의 단위 테스트시 사용
public class BookServiceUnitTest {
	
	@InjectMocks //해당 파일에 @Mock로 등록된 모든 애들을 주입 받는다
	private BookService bookService;
	
	@Mock
	private BookRepository bookRepository;

	@Test
	public void saveTest() {

		// BODMocikto 방식
		// given
		Book book = new Book();
		book.setTitle("책제목1");
		book.setAuthor("책저자1");
	
		// stub - 동작 지정
		when(bookRepository.save(book)).thenReturn(book);
		
		// test execute
		Book bookEntity = bookService.save(book);
		
		// then
		assertEquals(bookEntity, book);
	}
	

}
