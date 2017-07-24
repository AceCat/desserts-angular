import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

class Dessert {
	id: number;
	name: string;
	calories: number;
	price: number;
	gluten_free: boolean;
	contains_dairy: boolean
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	newDessert: Dessert = new Dessert();
	currentDessert: Dessert = new Dessert();

	desserts: Dessert[] = [];

	baseApiURL: string = "http://172.20.0.165:9292/desserts/";


  	constructor(private http: Http) {
  		this.getDesserts();
  	}

	getDesserts(){
		this.http.get(this.baseApiURL).subscribe(response =>
			this.desserts = response.json()
		)
	}

	setDessert(dessert){
		this.currentDessert = Object.assign({}, dessert)
	}

	postDessert(){
		this.http.post(this.baseApiURL, this.newDessert).subscribe(response =>
			this.desserts = response.json()
		)
	}

	editDessert(){
		this.http.patch(this.baseApiURL + this.currentDessert.id, this.currentDessert).subscribe(response =>
			this.desserts = response.json()
		)
	}

	deleteDessert(dessert){
		this.http.delete(this.baseApiURL + dessert.id).subscribe(response =>
			this.desserts = response.json()
		)
	}



  ngOnInit() {
  }

}
