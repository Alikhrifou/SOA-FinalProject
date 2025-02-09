package com.zarchive.zarchive.greeting.controller;


import com.zarchive.zarchive.auth.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static java.util.Collections.replaceAll;

@RestController
@RequestMapping("/greeting")
public class GreetingController {

    @Autowired
    private JwtService jwtService;

    @GetMapping("/hello")
    public String sayHelloToUser(@RequestHeader(HttpHeaders.AUTHORIZATION) String token){
        String[] splitedToken = token.split(" ");
        return "Hello " + jwtService.extractUsername(splitedToken[1]);
    }
}
