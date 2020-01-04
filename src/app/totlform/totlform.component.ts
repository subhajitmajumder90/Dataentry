import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-totlform',
  templateUrl: './totlform.component.html',
  styleUrls: ['./totlform.component.scss']
})
export class TotlformComponent implements OnInit {
  formData:FormGroup;
  st:any;
  dt:any;
  dtst:any;

  constructor(private fb:FormBuilder,private userservice:UsersService) {
    this.formData=this.fb.group({
      Id:       [''],
      fname:    ['',Validators.required],
      lname:    ['',Validators.required],
      gender:   ['',Validators.required],
      state:    [''],
      district: ['',Validators.required]
    })
   }

  ngOnInit() {
    this.st;
    this.showstate();
    this.dt;

  }
  setstate(id:any){
    //alert(id.target.value);
    this.userservice.getdistrict(id.target.value).subscribe((data:any)=>{
      if(data.stat=='Success'){
        this.dt=data.data;
        console.log(data.data);
      }
    })
  }
  showstate(){
    this.userservice.getstate().subscribe(
      (res:any)=>{
        if(res.stat=='Success'){
        
        this.st=res.data;
      }
    }
    );
  }
     
  


}
