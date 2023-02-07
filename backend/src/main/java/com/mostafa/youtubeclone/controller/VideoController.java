package com.mostafa.youtubeclone.controller;

import com.mostafa.youtubeclone.dto.UploadVideoResponseDto;
import com.mostafa.youtubeclone.dto.VideoDto;
import com.mostafa.youtubeclone.service.VideoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/videos")
@RequiredArgsConstructor
public class VideoController {

    private final VideoService videoService;


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UploadVideoResponseDto uploadVideo(@RequestParam("file")MultipartFile multipartFile)
    {
       return videoService.uploadVideo(multipartFile);
    }

    @PostMapping("/thumbnail")
    @ResponseStatus(HttpStatus.CREATED)
    public String uploadThumbnail(@RequestParam("file")MultipartFile multipartFile,@RequestParam("videoId")String videoId)
    {
       return videoService.uploadThumbnail(multipartFile,videoId);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public VideoDto editVideoMetaData(@RequestBody VideoDto videoDto)
    {
       return videoService.editVideo(videoDto);
    }

    @GetMapping("/{videoId}")
    @ResponseStatus(HttpStatus.OK)
    public VideoDto getVideoDetails(@PathVariable String videoId)
    {
       return videoService.getVideoDetails(videoId);
    }
}
