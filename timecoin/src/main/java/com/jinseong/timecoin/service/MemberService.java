package com.jinseong.timecoin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jinseong.timecoin.model.Member;
import com.jinseong.timecoin.model.RoleType;
import com.jinseong.timecoin.repository.MemberRepository;

@Service
public class MemberService {

	
	@Autowired
	private MemberRepository memberRepository;

	/*
	@Autowired
	private BCryptPasswordEncoder encoder;
	*/
	
	@Transactional
	public Member save(Member member) {

		String rawPassword = member.getPassword();
		//String encPassword = encoder.encode(rawPassword);
		//member.setPassword(encPassword);
		member.setRole(RoleType.USER);

		try {
			return memberRepository.save(member);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/*
	@Transactional
	public void update(Member reqMember) {
		Member member = memberRepository.findById(reqMember.getId()).orElseThrow(() -> {
			return new IllegalArgumentException("회원 찾기 실패.");
		});

		if (member.getOauth() == null || member.getOauth().equals("")) {
			String rawPassword = reqMember.getPassword();
			String encPassword = encoder.encode(rawPassword);
			member.setPassword(encPassword);
		}
		member.setEmail(reqMember.getEmail());

		// 회원 수정 함수 종료시 = 서비스종료 = 트랜잭션 종료 = commit
		// 영속화된 persistance 객체의 변화가 감지 되면 더티 체킹이 되어 update문을 날려줌
	}

	
	@Transactional(readOnly = true)
	public Member memberFindOne(String username) {
		Member member = null;
		try {
			member = memberRepository.findByUsername(username).get();
		} catch (Exception e) {
			member = null;
		}

		return member;
	}
	*/

	// select 할 때 트랜잭션 시작. 서비스 종료시에 트랜잭션 종료
	// @Transactional(readOnly = true)
	// public Member login(Member member) {
	// return memberRepository.findByUsernameAndPassword(member.getUsername(),
	// member.getPassword());
	// }

}
