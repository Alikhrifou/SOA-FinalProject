package com.zarchive.zarchive.auth.service;


import com.zarchive.zarchive.auth.entity.AppUser;
import com.zarchive.zarchive.auth.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppUserDetailsService implements UserDetailsService {

    @Autowired
    private AppUserRepository appUserRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser userDetail = appUserRepository.findByUsername(username);
        return new AppUserDetails(userDetail);
    }

    public String addUser(AppUser appUser){
        appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
        appUserRepository.save(appUser);
        return "User Added Successfully";
    }

    public List<AppUser> getAllUserss() {
        return appUserRepository.findAll();
    }
}
