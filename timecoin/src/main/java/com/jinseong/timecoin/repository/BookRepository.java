package com.jinseong.timecoin.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jinseong.timecoin.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
}
