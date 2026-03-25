package com.bettracker.api.controller;

import com.bettracker.api.entity.Bet;
import com.bettracker.api.repository.BetRepository;
import com.bettracker.api.security.BetService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bets")
@RequiredArgsConstructor
public class BetController {

    private final BetService betService;

    @PostMapping
    public ResponseEntity<Bet>  createBet(@Valid @RequestBody Bet bet) {
        return ResponseEntity.ok(betService.createBet(bet));
    }

    @GetMapping
    public ResponseEntity<List<Bet>> getAllBets() {
        return ResponseEntity.ok(betService.getAllBets());
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<Bet> updateBetStatus(@PathVariable long id, @Valid @RequestParam Bet.BetStatus betStatus) {
        return ResponseEntity.ok(betService.updateBetStatus(id, betStatus));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteBet(@PathVariable Long id) {
        betService.deleteBet(id);
        return ResponseEntity.noContent().build();
    }

}
