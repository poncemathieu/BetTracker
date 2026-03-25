package com.bettracker.api.repository;

import com.bettracker.api.entity.Bet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BetRepository extends JpaRepository<Bet, Long> {
    List<Bet> findByUserId(Long userId);
    List<Bet> findByUserIdAndStatus(Long userId, Bet.BetStatus status);
    List<Bet> findByUserIdAndSport(Long userId, String sport);
}
