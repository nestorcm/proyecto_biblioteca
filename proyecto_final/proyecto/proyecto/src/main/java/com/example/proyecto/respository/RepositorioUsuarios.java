package com.example.proyecto.respository;


import com.example.proyecto.models.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RepositorioUsuarios extends JpaRepository<Usuarios,Long> {

    Usuarios findByCORREO(String CORREO);
}
