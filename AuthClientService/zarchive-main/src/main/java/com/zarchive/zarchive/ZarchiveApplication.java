package com.zarchive.zarchive;

import com.zarchive.zarchive.auth.entity.AppUser;
import com.zarchive.zarchive.auth.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
@EnableDiscoveryClient
public class ZarchiveApplication implements ApplicationRunner{

	@Autowired
	private AppUserRepository appUserRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;
	public static void main(String[] args) {
		SpringApplication.run(ZarchiveApplication.class, args);
	}

	@Override
	public void run(ApplicationArguments args) throws Exception {



	}
}
