package com.example.proyecto.controller;


import com.example.proyecto.models.Links;
import com.example.proyecto.respository.RepositorioLinks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path ="api/v1/admin/tablaLinks")
public class ControladorLinks {

    @Autowired
    private RepositorioLinks RepoL;

    @GetMapping()
    public String index() {
        return "Conectado";
    }

    @GetMapping("Links")
    public List<Links> getLinks() {
        return RepoL.findAll();
    }

    @GetMapping("Link/{id}")
    public Links getLink(@PathVariable Long id) {
        Links LinkById = RepoL.findById(id).get();
        return LinkById;

    }

    @PostMapping("GuardaLink")
    public String post(@RequestBody Links lin) {
        RepoL.save(lin);
        return "Grabado";
    }

    @PutMapping("EditarLink/{id}")
    public String update(@PathVariable Long id, @RequestBody Links lin) {
        Links updateLink = RepoL.findById(id).get();
        updateLink.setLINK(lin.getLINK());
        RepoL.save(updateLink);
        return("Editado correctamente");

    }

    @DeleteMapping("BorraLink/{id}")
    public String delete(@PathVariable Long id) {
        Links borrarLink = RepoL.findById(id).get();
        RepoL.delete(borrarLink);
        return ("Borrado");
    }
}
