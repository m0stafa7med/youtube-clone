package com.mostafa.youtubeclone.service;

import com.mostafa.youtubeclone.dto.UserInfoDto;
import com.mostafa.youtubeclone.model.User;
import com.mostafa.youtubeclone.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.var;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Consumer;
import java.util.function.Predicate;


@Service
@RequiredArgsConstructor
public class UserRegistrationService {

    private final UserRepository userRepository;

    public void register(UserInfoDto userInfoDto) {
        Optional<User> existingUserOpt = userRepository.findByEmailAddress(userInfoDto.getEmail());
        if (existingUserOpt.isPresent()) {
            userInfoDto.setId(existingUserOpt.get().getId());
            return;
        }

        var user = new User();
        user.setSub(userInfoDto.getSub());
        user.setEmailAddress(userInfoDto.getEmail());
        user.setFirstName(userInfoDto.getGivenName());
        user.setLastName(userInfoDto.getFamilyName());
        user.setFullName(userInfoDto.getName());
        user.setPicture(userInfoDto.getPicture());
        user.setPicture(userInfoDto.getPicture());
        userRepository.save(user);
    }
}
