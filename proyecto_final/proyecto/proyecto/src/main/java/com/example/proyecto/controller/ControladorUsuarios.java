package com.example.proyecto.controller;


import com.example.proyecto.models.LoginRequest;
import com.example.proyecto.models.Usuarios;
import com.example.proyecto.respository.RepositorioUsuarios;
import com.example.proyecto.service.UserDetailServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jmx.export.notification.UnableToSendNotificationException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path ="api/v1/admin/tablaUsuarios")
@RequiredArgsConstructor
public class ControladorUsuarios {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RepositorioUsuarios RepoU;

    @Autowired
    private UserDetailServiceImpl userDetailService;

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
        updateUsuarios.setCLASE_USUARIO(Est.getCLASE_USUARIO());
        RepoU.save(updateUsuarios);
        return("Editado correctamente");

    }

    @DeleteMapping("BorraUsu/{id}")
    public String delete(@PathVariable Long id) {
        Usuarios borrarUsuarios = RepoU.findById(id).get();
        RepoU.delete(borrarUsuarios);
        return ("Borrado");
    }


    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> credentials) {
        String correo = credentials.get("correo");
        String contrasena = credentials.get("contrasena");

        Map<String, Object> response = new HashMap<>();

        // Verificar si el usuario existe y la contraseña es correcta
        Usuarios user = RepoU.findByCORREO(correo);

        if (user != null && passwordEncoder.matches(contrasena, user.getCONTRASENA())) {
            response.put("message", "Login exitoso");
            response.put("user", user); // Agregar el objeto Usuarios a la respuesta
        } else {
            response.put("message", "Credenciales inválidas");
        }

        return response;
    }



   /* @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getCORREO(),
                            loginRequest.getCONTRASENA()
                    )
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            // Aquí puedes generar un token JWT si lo estás usando
            return ResponseEntity.ok("Login exitoso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales inválidas");
        }
    }

*/

    /*@GetMapping("/home")
    public String home() {
        return "Private home";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasAuthority('ADMIN')")
    public String admin() {
        return "Private admin";*/
    }





