package com.example.proyecto.respository;

import com.example.proyecto.models.Asesoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositorioAsesoria extends JpaRepository<Asesoria,Long> {
}
