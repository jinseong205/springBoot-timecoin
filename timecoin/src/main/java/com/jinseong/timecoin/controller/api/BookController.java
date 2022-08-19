package com.jinseong.timecoin.controller.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jinseong.timecoin.model.Book;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class BookController {
	
	private final BookController bookServcie;
	
	
	@GetMapping("/book")
	public ResponseEntity<?> findAll(){
		return new ResponseEntity<>(bookServcie.findAll(),HttpStatus.CREATED);		//200 //httpStatusCode
	}
	
	
	@GetMapping("/book/{id}")
	public ResponseEntity<?> findById(@PathVariable Long id){
		return new ResponseEntity<>(bookServcie.findById(id),HttpStatus.OK);		//200 //httpStatusCode
	}
	

	@PostMapping("/book")
	public ResponseEntity<?> save(@RequestBody Book book){
		return new ResponseEntity<>(bookServcie.save(book),HttpStatus.OK);		//200 //httpStatusCode
	}

	@PutMapping("/book/{id}")
	public ResponseEntity<?> update(@RequestBody Long id, Book book){
		return new ResponseEntity<>(bookServcie.update(id, book),HttpStatus.OK);		//200 //httpStatusCode
	}

	@DeleteMapping("/book/{id}")
	public ResponseEntity<?> delete(@RequestBody Long id){
		return new ResponseEntity<>(bookServcie.delete(id),HttpStatus.OK);		//200 //httpStatusCode
	}

	
}
