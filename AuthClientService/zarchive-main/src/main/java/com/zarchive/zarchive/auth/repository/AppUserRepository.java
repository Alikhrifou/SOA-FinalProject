package com.zarchive.zarchive.auth.repository;

import com.zarchive.zarchive.auth.entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, Integer> {
    Optional<AppUser> findByEmail(String email);
    AppUser findByUsername(String username);


}