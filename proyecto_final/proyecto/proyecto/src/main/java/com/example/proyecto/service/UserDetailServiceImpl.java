package com.example.proyecto.service;

import com.example.proyecto.models.SecurityUser;
import com.example.proyecto.models.Usuarios;
import com.example.proyecto.respository.RepositorioUsuarios;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserDetailServiceImpl implements UserDetailsService {

    private RepositorioUsuarios repositorioUsuarios;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuarios user = repositorioUsuarios.findByCORREO(username);
        if (user == null) {
            throw new UsernameNotFoundException("Correo no válido");
        }

        return new SecurityUser(user);
    }
}
