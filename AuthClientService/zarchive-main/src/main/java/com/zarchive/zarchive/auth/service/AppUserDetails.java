package com.zarchive.zarchive.auth.service;

import com.zarchive.zarchive.auth.entity.AppUser;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class AppUserDetails implements UserDetails {

    private String username;
    private String password;
    private Integer id;
    private List<GrantedAuthority> authorities;
    private AppUser appUser; // Reference to the AppUser object

    public AppUserDetails(AppUser appUser) {
        this.username = appUser.getUsername();
        this.password = appUser.getPassword();
        this.id = appUser.getId();
        this.appUser = appUser; // Store the AppUser object

        // Ensure roles are not null or empty before splitting
        String roles = appUser.getRoles();
        if (roles == null || roles.isEmpty()) {
            this.authorities = List.of(); // No roles assigned
        } else {
            this.authorities = List.of(roles.split(","))
                    .stream()
                    .map(role -> new SimpleGrantedAuthority(role.trim())) // Trim roles to remove extra spaces
                    .collect(Collectors.toList());
        }
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public Integer getId() {
        return id; // Getter for user ID
    }

    public AppUser getAppUser() {
        return appUser; // Getter for AppUser object
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // Customize based on your application's requirements
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // Customize based on your application's requirements
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // Customize based on your application's requirements
    }

    @Override
    public boolean isEnabled() {
        return true; // Customize based on your application's requirements
    }
}