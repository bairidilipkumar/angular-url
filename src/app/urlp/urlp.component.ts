import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-urlp',
  templateUrl: './urlp.component.html',
  styleUrls: ['./urlp.component.css']
})
export class UrlpComponent implements OnInit {
  
constructor( private http:HttpClient,private router:Router){}
  ngOnInit(): void {
  }

  onSubmit(data:JSON){
    console.log(data);
    this.http.post('https://616a6f7816e7120017fa0f91.mockapi.io/api/v1/url',data).subscribe((result)=>
    {
      console.warn("result",result)
      this.router.navigate(['/urls'])
    })

  }

}
