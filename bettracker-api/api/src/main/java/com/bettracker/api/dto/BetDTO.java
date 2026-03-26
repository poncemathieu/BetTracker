package com.bettracker.api.dto;

import com.bettracker.api.entity.Bet.BetStatus;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class BetDTO {
    private Long id;
    private String sport;
    private String match;
    private String bookmaker;
    private String betType;
    private String selection;
    private BigDecimal odds;
    private BigDecimal stake;
    private BigDecimal result;
    private LocalDateTime createdAt;
    private LocalDate betDate;
    private BetStatus status;
}
