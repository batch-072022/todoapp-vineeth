import {OnInit,Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  user={
    id:1,
    name:"prudhvi",
    email:"v@gmail.com"
  };
  updateUser()
  {
    alert("Successfully Updated");
    this.router.navigateByUrl('/users');
  }

}
