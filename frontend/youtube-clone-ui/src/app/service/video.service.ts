import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UploadVideoResponse} from "../upload-video/UploadVideoResponse";
import {Observable} from "rxjs";
import { VideoDto } from '../video-dto';

@Injectable({
  providedIn: 'root'
})
export class VideoService {



  saveVideo(videoMetaData: VideoDto) : Observable<VideoDto> {
   return this.httpClient.put<VideoDto>("http://localhost:9099/api/videos",videoMetaData);
  }

  constructor(private httpClient: HttpClient) {
  }


  uploadVideo(fileEntry: File): Observable<UploadVideoResponse> {
    const formData = new FormData()
    formData.append('file', fileEntry, fileEntry.name);
    return this.httpClient.post<UploadVideoResponse>("http://localhost:9099/api/videos", formData);
  }

  uploadThumbnail(selectedFile: File, videoId: string): Observable<string> {
    const formData = new FormData()
    formData.append('file', selectedFile, selectedFile.name);
    formData.append('videoId',videoId);
    return this.httpClient.post("http://localhost:9099/api/videos/thumbnail", formData,{
      responseType :'text' 
    });
  }

  getVideo(videoId : string)
  {
   return this.httpClient.get<VideoDto>("http://localhost:9099/api/videos/"+videoId);
  }
}
