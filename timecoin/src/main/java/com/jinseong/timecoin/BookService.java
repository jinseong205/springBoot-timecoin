package com.jinseong.timecoin;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jinseong.timecoin.model.Book;
import com.jinseong.timecoin.repository.BookRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service // 기능을 정의 할 수 있고, 트랜잭션을 관리 할 수 있음.
public class BookService {
	private final BookRepository bookRepository;

	@Transactional //서비스가 함수가 종료 될 때 commit 할지 rollback 할 지 트랜잭션 관리 하겠다. 
	public Book saveBook(Book book) {
		return bookRepository.save(book);
	}

	@Transactional(readOnly = true) //JPA 변경감지라는 내부기능 활성화 X, update시의 정합성을 유지해줌, insert 팬텀현상 막지못함
	public Book findBook(Long id) {
		return bookRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("id를 확인해주세요."));
	}

	@Transactional(readOnly = true)
	public List<Book> findAllBook() {
		return bookRepository.findAll();
	}

	@Transactional
	public Book updateBook(Long id, Book book) {
		//더티 체킹하기
		Book bookEntity = bookRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("id를 확인해주세요.")); //영속화 (book 오브젝트)
		bookEntity.setTitle(book.getTitle());
		bookEntity.setAuthor(book.getAuthor());
		return bookEntity;
	}// 함수 종료 => 트랜잭션 종료 => 영속화 되어있는 데이터를 갱신 (flush => commit) =====> ejxlcpzld

	public String deleteBook(Long id) {
		bookRepository.deleteById(id);
		return "ok";
	}

}
