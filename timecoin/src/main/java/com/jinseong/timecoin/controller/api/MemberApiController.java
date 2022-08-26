package com.jinseong.timecoin.controller.api;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jinseong.timecoin.dto.ResponseDto;
import com.jinseong.timecoin.model.Member;
import com.jinseong.timecoin.service.MemberService;

@RestController
public class MemberApiController {
	
	@Autowired
	HttpSession session;
	
	@Autowired	
	private MemberService memberService;

	@PostMapping("/auth/joinProc")
	public ResponseEntity<?> save(@RequestBody Member member) {
		return new ResponseEntity<>(memberService.save(member),HttpStatus.CREATED);
	}
	
	/*
	@PutMapping("/member")
	public ResponseDto<Integer> update(@RequestBody Member member, @AuthenticationPrincipal PrincipalDetail principal, HttpSession session){	//requestBody 없으면 key=value, x-www-form-unlencoded
		memberService.update(member);
		
		//세션 등록
		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(member.getUsername(), member.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		return new ResponseDto<Integer>(HttpStatus.OK.value(), 1);
	}
	*/
	
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
