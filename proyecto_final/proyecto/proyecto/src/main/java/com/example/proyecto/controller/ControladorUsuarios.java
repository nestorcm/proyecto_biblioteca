package com.example.proyecto.controller;


import com.example.proyecto.models.Usuarios;
import com.example.proyecto.respository.RepositorioUsuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path ="api/tablaUsuarios")
public class ControladorUsuarios {

    @Autowired
    private RepositorioUsuarios RepoU;

    @GetMapping()
    public String index() {
        return "Conectado";
    }

    @GetMapping("Usuario")
    public List<Usuarios> getUsuarios() {
        return RepoU.findAll();
    }

    @GetMapping("Usuario/{id}")
    public Usuarios getUsuario(@PathVariable Long id) {
        Usuarios usuarioById = RepoU.findById(id).get();
        return usuarioById;

    }

    @PostMapping("GuardaUsu")
    public String post(@RequestBody Usuarios Usua) {
        RepoU.save(Usua);
        return "Grabado";
    }

    @PutMapping("EditarUsu/{id}")
    public String update(@PathVariable Long id, @RequestBody Usuarios Est) {
        Usuarios updateUsuarios = RepoU.findById(id).get();
        updateUsuarios.setAPELLIDO(Est.getAPELLIDO());
        updateUsuarios.setNOMBRE(Est.getNOMBRE());
        updateUsuarios.setCORREO(Est.getCORREO());
        updateUsuarios.setCODIGO(Est.getCODIGO());
        updateUsuarios.setCONTRASENA(Est.getCONTRASENA());
        updateUsuarios.setTIPO_USUARIO(Est.getTIPO_USUARIO());
        RepoU.save(updateUsuarios);
        return("Editado correctamente");

    }

    @DeleteMapping("BorraUsu/{id}")
    public String delete(@PathVariable Long id) {
        Usuarios borrarUsuarios = RepoU.findById(id).get();
        RepoU.delete(borrarUsuarios);
        return ("Borrado");
    }

}
