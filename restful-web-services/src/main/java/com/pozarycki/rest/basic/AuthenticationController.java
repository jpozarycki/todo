package com.pozarycki.rest.basic;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthenticationController {



    @GetMapping(path = "/basicauth")
    public AuthenticationBean authenticationBean() {
//        throw new RuntimeException("Some error happened");
        return new AuthenticationBean("You are authenticated");
    }

}
