package com.mostafa.youtubeclone.model;

import org.springframework.data.annotation.Id;

import java.util.concurrent.atomic.AtomicInteger;

public class Comment {
    @Id
    private String id;
    private String text;
    private String author;
    private AtomicInteger likeCount = new AtomicInteger(0);
    private AtomicInteger disLikeCount = new AtomicInteger(0);
}
