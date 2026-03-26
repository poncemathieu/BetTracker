package com.bettracker.api.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class UserDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String currency;
    private BigDecimal initialBankroll;
    private BigDecimal currentBankroll;
    private LocalDateTime createdAt;
}
