package com.bettracker.api.mapper;

import com.bettracker.api.dto.UserDTO;
import com.bettracker.api.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDTO toDTO(User user);
}