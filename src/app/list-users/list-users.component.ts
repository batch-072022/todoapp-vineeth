import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //users=["Vineeth","Naresh",Sushmitha"];

  users=[

    {id:101, name:"vineeth",email:"v@gmail.com"},



    {id:102, name:"Naresh",email:"n@gmail.com"},



    {id:103, name:"sushmitha",email:"s@gmail.com"}



  ];



  //ListTaskComponent



  tasks=[



    {id:1,name:"Install Java",status:"COMPLETED"},



    {id:2,name:"Install NodeJS",status:"PENDING"},



  ];





  deleteUser()



  {



    alert("Successfully deleted");



  }





}
