package com.jinseong.timecoin.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jinseong.timecoin.model.Book;
import com.jinseong.timecoin.repository.BookRepository;

import lombok.RequiredArgsConstructor;


//단위테스트 (Service와 관련된 애들만 메모리에 등록되면 됨) 
@RequiredArgsConstructor
@Service // 기능을 정의 할 수 있고, 트랜잭션을 관리 할 수 있음.
public class BookServiceUnitTest {
	private final BookRepository bookRepository;



}
