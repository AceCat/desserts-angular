import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

class User {
	email: string;
	password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	baseApiURL: string = "http://172.20.0.165:9292/users/";
	currentUser: User = new User();
	errorMessage = "";

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
  }

  loginUser() {
  	this.http.post(this.baseApiURL + 'login', this.currentUser).subscribe(response =>
  		response.json().email ? this.router.navigate(['/list']) : this.errorMessage = response.json().error
  	)
  }

}
