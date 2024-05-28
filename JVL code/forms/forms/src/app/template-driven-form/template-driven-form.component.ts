import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  countryList:Country[]=[
    new Country('1','INDIA'),
    new Country('2','USA'),
    new Country('3','UK')
  ];

  contact!:Contact;

  ngOnInit(): void {
    this.contact= {
      firstName:"",
      lastName:"",
      email:"tamilselvana@stgit.com",
      gender:"male",
      isMarried:true,
      country:"1",
      address:{
        city:"Chennai",
        street:"T nagar",
        pincode:"600017"
      }

    }
    
  }


  onSubmit(form:NgForm){
    console.log(form.value);
  }

  
}

class Country{
  id:String;
  name:String;

  constructor(id:String,name:String){
    this.id=id;
    this.name=name;
  }

}

class Contact{
  firstName!:String;
  lastName!:String;
  email!:String;
  gender!:String;
  isMarried!:boolean;
  country!:String;
  address!:{
    city:String;
    street:String;
    pincode:String;
  }
}