package com.zarchive.zarchive.auth.controller;


import com.zarchive.zarchive.auth.dto.AuthenticationRequest;
import com.zarchive.zarchive.auth.dto.AuthenticationResponse;
import com.zarchive.zarchive.auth.entity.AppUser;
import com.zarchive.zarchive.auth.repository.AppUserRepository;
import com.zarchive.zarchive.auth.service.AppUserDetails;
import com.zarchive.zarchive.auth.service.AppUserDetailsService;
import com.zarchive.zarchive.auth.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {
    @Autowired
    private AppUserDetailsService appUserDetailsService;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private AppUserRepository appUserRepository;

    @GetMapping("/allUsers")
    public String welcome(){
        return appUserDetailsService.getAllUserss().toString();
    }

    @PostMapping("/adduser")
    public String addNewUser(@RequestBody AppUser appUser){
        return appUserDetailsService.addUser(appUser);
    }
    @GetMapping("/protected")
    public String userProfile(){
        return "Welcome to the protected link";
    }

    @PostMapping("/authenticate")
    public AuthenticationResponse authenticateAndGetToken(@RequestBody AuthenticationRequest authenticationRequest) {
        // Authenticate the user
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
        );

        if (authentication.isAuthenticated()) {
            // Fetch the AppUserDetails object
            AppUserDetails appUserDetails = (AppUserDetails) authentication.getPrincipal();

            // Get the AppUser object from AppUserDetails
            AppUser appUser = appUserDetails.getAppUser();

            // Generate the token
            String token = jwtService.generateToken(authenticationRequest.getUsername());

            // Return the token and user ID in the response
            return new AuthenticationResponse(token, appUser.getId(),appUser.getRoles());
        } else {
            throw new UsernameNotFoundException("Invalid request");
        }
    }

}
