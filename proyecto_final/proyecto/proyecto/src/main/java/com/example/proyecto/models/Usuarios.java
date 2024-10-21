package com.example.proyecto.models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.logging.Level;


@Getter
@Setter
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Usuarios {

    @Id
    @Getter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUSUARIOS;

    /*
    @OneToMany( mappedBy = "usuarios",cascade = CascadeType.ALL)
    @JsonBackReference
    private Set<Asesoria> asesorias = new HashSet<>(); */
  /*  @OneToMany(mappedBy = "usuarios")
    @JsonManagedReference
    private List<Asesoria> asesorias;*/

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    /*private List<Asesoria> asesorias;*/
    private Set<Asesoria> asesorias = new HashSet<>();



    @Column
    @Getter
    @Setter
    private String NOMBRE;

    @Column
    @Getter
    @Setter
    private String APELLIDO;

    @Column(unique = true)
    @Getter
    @Setter
    private String CORREO;

    @Column
    @Getter
    @Setter
    private  String CONTRASENA;

    @Column(unique = true)
    @Getter
    @Setter
    private int CODIGO;

    @Column
    @Getter
    @Setter
    private  String TIPO_USUARIO;

    @Column
    @Getter
    @Setter
    private  String CLASE_USUARIO;

}
