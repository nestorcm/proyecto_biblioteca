package com.example.proyecto.models;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
public class SecurityUser implements UserDetails {

    private Usuarios user;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList( new SimpleGrantedAuthority(user.getTIPO_USUARIO()));
    }

    @Override
    public String getPassword() {
        return user.getCONTRASENA();
    }

    @Override
    public String getUsername() {
        return user.getCORREO();
    }
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
