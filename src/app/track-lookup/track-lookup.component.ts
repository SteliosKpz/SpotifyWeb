import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenService } from '../services/token.service';
import { map,switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-track-lookup',
  templateUrl: './track-lookup.component.html',
  styleUrls: ['./track-lookup.component.scss'],
})
export class TrackLookupComponent implements OnInit {
  tokenObj;
  currentArtist;
  artistTracks;
  artists:Observable<any>;
  artistForm;
  lastIndex = 0;

  constructor(private http: HttpClient, private token: TokenService) {
    this.tokenObj = this.token.getToken();
    this.artistForm = new FormGroup({
      artist: new FormControl(null, [Validators.required]),
    });
    this.artistForm.get('artist').valueChanges.subscribe((res) => {
      this.artists = this.http
        .get(`https://api.spotify.com/v1/search?q=${res}&type=${'artist'}`, {
          headers: new HttpHeaders(
            `Authorization:Bearer ${this.tokenObj.access_token}`
          ),
        }).pipe(map(
          (res:any)=>{return res.artists.items}
        ))
    });
  }

  ngOnInit(): void {

  }

  setArtist(artist) {
    this.currentArtist = artist;
    this.http
      .get(
        `https://api.spotify.com/v1/artists/${this.currentArtist.id}/top-tracks?market=US`,
        {
          headers: new HttpHeaders(
            `Authorization:Bearer ${this.tokenObj.access_token}`
          ),
        }
      )
      .subscribe((res) => {
        this.currentArtist = Object.assign(this.currentArtist, res);
        for (var i in this.currentArtist.tracks) {
          this.currentArtist.tracks[i].audio = new Audio(
            this.currentArtist.tracks[i].preview_url
          );
          this.currentArtist.tracks[i].playing = false;
          this.currentArtist.tracks[i].progress=0
        }
        console.log(this.currentArtist);
      });
  }


  playPreview(i) {
    if (this.lastIndex != i) {
      this.currentArtist.tracks[this.lastIndex].audio.pause();
      this.currentArtist.tracks[this.lastIndex].playing = false;
    }
    switch (this.currentArtist.tracks[i].playing) {
      case true:
        this.currentArtist.tracks[i].audio.pause();
        break;
      case false:
        this.currentArtist.tracks[i].audio.play();
        break;

      default:
        break;
    }
    this.currentArtist.tracks[i].playing = this.currentArtist.tracks[i].playing ? false : true;
    this.lastIndex = i;

    var progressInterval=setInterval(()=>{
      if(this.currentArtist.tracks[i].playing==true && this.currentArtist.tracks[i].progress<100){
        this.currentArtist.tracks[i].progress++
      }
      else{
        clearInterval(progressInterval)
        this.currentArtist.tracks[i].progress=0
        this.currentArtist.tracks[i].playing=false
      }
    },(this.currentArtist.tracks[i].audio.duration/100)*1000)

      }
}
