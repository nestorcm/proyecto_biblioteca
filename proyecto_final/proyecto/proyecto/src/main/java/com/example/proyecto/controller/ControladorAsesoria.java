package com.example.proyecto.controller;

import com.example.proyecto.models.Asesoria;
import com.example.proyecto.respository.RepositorioAsesoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path ="api/v1/admin/TablaAse")
public class ControladorAsesoria {


    @Autowired
    private RepositorioAsesoria RepoA;

    @GetMapping()
    public String index() {
        return "Conectado";
    }

    @GetMapping("Asesoria")
    public List<Asesoria> getAsesoria() {
        return RepoA.findAll();
    }

    @GetMapping("Asesoria/{id}")
    public Asesoria getAsesoria(@PathVariable Long id) {
        Asesoria AsesoriaById = RepoA.findById(id).get();
        return AsesoriaById;

    }

    @PostMapping("GuardaAse")
    public String post(@RequestBody Asesoria Ase) {
        RepoA.save(Ase);
        return "Grabado";
    }

    @PutMapping("EditarAse/{id}")
    public String update(@PathVariable Long id, @RequestBody Asesoria Ase) {
        Asesoria updateAsesoria = RepoA.findById(id).get();
        updateAsesoria.setAPROBACION(Ase.getAPROBACION());
        updateAsesoria.setTIPO(Ase.getTIPO());
        updateAsesoria.setDESCRIPCION(Ase.getDESCRIPCION());
        updateAsesoria.setCVIRTUAL(Ase.getCVIRTUAL());
        updateAsesoria.setFECHA(Ase.getFECHA());
        updateAsesoria.setUsuario(Ase.getUsuario());
        updateAsesoria.setF_ASIGNADO(Ase.getF_ASIGNADO());
        RepoA.save(updateAsesoria);
        return("Editado correctamente");

    }

    @DeleteMapping("BorraAse/{id}")
    public String delete(@PathVariable Long id) {
        Asesoria borrarAsesoria = RepoA.findById(id).get();
        RepoA.delete(borrarAsesoria);
        return ("Borrado");
    }
}
