package com.example.server.controller;

import com.example.server.dto.ContactRequest;
import com.example.server.service.MailService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    private final MailService mailService;

    public ContactController(MailService mailService) {
        this.mailService = mailService;
    }

    @PostMapping
    public ResponseEntity<?> sendMessage(@Valid @RequestBody ContactRequest request) {
        mailService.sendContactEmail(request);
        return ResponseEntity.ok().body(new ApiResponse(true, "Message sent successfully"));
    }

    record ApiResponse(boolean success, String message) {}
}