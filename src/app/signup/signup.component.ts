import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  regform:FormGroup;
  submited:boolean=false;
  dal:any;
  match:boolean=true;

  constructor(private formbulider:FormBuilder) { }

  ngOnInit() {
    this.regform=this.formbulider.group({
      fname:            ['',  Validators.required],
      lname:            ['',  Validators.required],
      password:         ['',  Validators.required],
      confirmpassword:  ['',  Validators.required]
    });
    
  }
  postdata(){
    this.submited=true;
    console.log(this.regform.value);

  }

}
