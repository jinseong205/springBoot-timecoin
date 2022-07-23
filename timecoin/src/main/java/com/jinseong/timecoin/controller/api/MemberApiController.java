package com.jinseong.timecoin.controller.api;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberApiController {
	
	@Autowired
	HttpSession session;

	@GetMapping("/api/member")
	public String findMember() {
		return "1";
	}
	
	
	/*
	@PostMapping("/api/member/login")
	public ResponseDto<Integer> login(@RequestBody Member member, HttpSession session) {
		System.out.println("login 호출됨");
		
		//DB에 insert를 하고 return
		member.setRole(RoleType.USER);
		Member principal = memberService.login(member);	//principal (접근주체)
		
		if(principal != null) {
			session.setAttribute("princaipal", principal);
		}
		return new ResponseDto<Integer>(HttpStatus.OK, 1);
	}
	*/

}
