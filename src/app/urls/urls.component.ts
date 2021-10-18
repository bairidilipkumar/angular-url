import { Component, OnInit } from '@angular/core';
import { User } from '../modal';
import { UserService } from '../user.service';

@Component({
  selector: 'app-urls',
  templateUrl: './urls.component.html',
  styleUrls: ['./urls.component.css']
})
export class UrlsComponent implements OnInit {

  userList:Array<User> = []
  constructor(private userService:UserService){
    console.log(this.userList)
  }
  

  ngOnInit(): void {
    this.loadData()
  }
  loadData(){
    this.userService.getAllUser().subscribe((data) => {
      this.userList = data
     })
  }

}
