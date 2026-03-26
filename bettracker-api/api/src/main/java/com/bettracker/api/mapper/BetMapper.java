package com.bettracker.api.mapper;

import com.bettracker.api.dto.BetDTO;
import com.bettracker.api.entity.Bet;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BetMapper {
    BetDTO toBetDTO(Bet bet);
    Bet toEntity(BetDTO betDTO);
}
