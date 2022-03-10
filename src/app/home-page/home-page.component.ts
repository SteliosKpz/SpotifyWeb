import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute,Router} from '@angular/router';
import { TokenService } from '../services/token.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private http:HttpClient,private activeroute:ActivatedRoute,private router:Router,private tkservice:TokenService) { }
  tokenObj
  ngOnInit(): void {
    this.activeroute.queryParams.subscribe(params=>{
     if(params.code!=null){
       this.http.post('http://localhost:3000/spotify-token',{code:params.code,state:params.state}).subscribe(res=>{
         console.log(res)
         this.tokenObj=res
         this.tkservice.setToken(this.tokenObj)
         this.router.navigateByUrl('/track-lookup')
       })
     }
    })
  }


}
