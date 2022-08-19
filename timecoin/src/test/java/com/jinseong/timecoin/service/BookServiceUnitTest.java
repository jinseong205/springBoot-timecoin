package com.jinseong.timecoin.service;

import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.jinseong.timecoin.repository.BookRepository;


/*
* 단위테스트 (Service와 관련된 애들만 메모리에 등록되면 됨) 
* BoardReposiotry => 가짜 객체로 만들 수 있음
*/
@ExtendWith(MockitoExtension.class)
public class BookServiceUnitTest {
	
	@InjectMocks //해당 파일에 @Mock로 등록된 모든 애들을 주입 받는다
	private BookService bookService;
	
	@Mock
	private BookRepository bookRepository;



}
