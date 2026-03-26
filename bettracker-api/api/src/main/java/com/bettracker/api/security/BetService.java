package com.bettracker.api.security;

import com.bettracker.api.dto.BetDTO;
import com.bettracker.api.entity.Bet;
import com.bettracker.api.entity.User;
import com.bettracker.api.mapper.BetMapper;
import com.bettracker.api.repository.BetRepository;
import com.bettracker.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BetService {

    private final BetRepository betRepository;
    private final UserRepository userRepository;
    private final BetMapper betMapper;

    private User getCurrentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public BetDTO createBet(BetDTO betDTO) {
        User user = getCurrentUser();
        Bet bet = betMapper.toEntity(betDTO);
        bet.setUser(user);
        return betMapper.toBetDTO(betRepository.save(bet));
    }

    public List<BetDTO> getAllBets() {
        User user = getCurrentUser();
        return betRepository.findByUserId(user.getId())
                .stream()
                .map(betMapper::toBetDTO)
                .toList();
    }

    public BetDTO updateBetStatus(Long betId, Bet.BetStatus status) {
        Bet bet = betRepository.findById(betId)
                .orElseThrow(() -> new RuntimeException("Bet not found"));
        bet.setStatus(status);
        return betMapper.toBetDTO(betRepository.save(bet));
    }

    public void deleteBet(Long betId) {
        betRepository.deleteById(betId);
    }
}
