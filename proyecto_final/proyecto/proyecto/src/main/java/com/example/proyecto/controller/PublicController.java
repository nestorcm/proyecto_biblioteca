package com.example.proyecto.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Public")
@RequiredArgsConstructor
public class PublicController {

    @GetMapping("/home")
    public String home(){
            return "Public home";
    }

}
