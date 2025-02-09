package com.zarchive.zarchive.auth.dto;

public class AuthenticationResponse {
    private String token;
    private int userId;
    private String roles;

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    public AuthenticationResponse(String token, int userId, String roles) {
        this.token = token;
        this.userId = userId;
        this.roles = this.roles;
    }

    // Getters and Setters
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}