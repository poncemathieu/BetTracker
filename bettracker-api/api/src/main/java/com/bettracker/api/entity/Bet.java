package com.bettracker.api.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "bets")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Bet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private String sport;

    @Column(nullable = false)
    private String match;

    @Column(nullable = false)
    private String bookmaker;

    @Column(nullable = false)
    private LocalDate betDate;

    @Column(nullable = false)
    private String betType;

    @Column(nullable = false)
    private String selection;

    @Column(nullable = false, precision = 5, scale = 2)
    private BigDecimal odds;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal stake;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private BetStatus status;

    @Column(precision = 10, scale = 2)
    private BigDecimal result;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        createdAt = LocalDateTime.now();
        if (status == null) {
            status = BetStatus.PENDING;
        }
    }

    public enum BetStatus {
        PENDING,
        WON,
        LOST,
        CASHOUT
    }
}
