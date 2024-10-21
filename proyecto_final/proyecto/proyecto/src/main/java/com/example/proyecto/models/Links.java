package com.example.proyecto.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Links {

    @Id
    @Getter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idLINKS;

    @Column
    @Getter
    @Setter
    private String LINK;



}
