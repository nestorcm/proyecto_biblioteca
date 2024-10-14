package com.example.proyecto.models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;


@Getter
@Setter
@Entity
public class Asesoria {

    @Id
    @Getter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idASESORIA;


/*
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonManagedReference
    private Usuarios usuarios;
*/
  /*  @ManyToOne
    @JsonBackReference
    private Usuarios usuarios;
*/
    @ManyToOne
    @JoinColumn(name = "usuarios_idusuarios")
    @JsonBackReference
    private Usuarios usuario;


    @Column
    @Getter
    @Setter
    private String TIPO;

    @Column
    @Getter
    @Setter
    private String DESCRIPCION;

    @Column
    @Getter
    @Setter
    private int F_ASIGNADO;

    @Column
    @Getter
    @Setter
    private LocalDateTime FECHA;

    @Column
    @Getter
    @Setter
    private Boolean APROBACION;

    @Column
    @Getter
    @Setter
    private Boolean CVIRTUAL;
}
