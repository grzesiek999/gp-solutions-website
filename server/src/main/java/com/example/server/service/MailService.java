package com.example.server.service;

import com.example.server.dto.ContactRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    private final JavaMailSender mailSender;

    @Value("${app.mail.to}")
    private String toAddress;

    public MailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactEmail(ContactRequest request) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toAddress);
        message.setSubject("GP IT Soloutions wiadomość z formularza kontaktowego");
        message.setText(
                "Imię i nazwisko: " + request.getFull_name() + "\n" +
                "Nazwa firmy: " + request.getCompany() + "\n" +
                "Telefon: " + request.getPhone() + "\n" +
                        "Email: " + request.getEmail() + "\n\n" +
                        "Wiadomość: \n\n" + request.getMessage()
        );
        message.setReplyTo(request.getEmail());
        mailSender.send(message);
    }
}