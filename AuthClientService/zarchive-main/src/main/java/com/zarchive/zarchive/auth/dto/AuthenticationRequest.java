package com.zarchive.zarchive.auth.dto;


import lombok.*;

@Setter
@Getter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationRequest {
    private String username;
    private String clientId;

    public String getUsername() {
        return username;
    }

    private String password;

    public String getPassword() {
        return password;
    }
}
