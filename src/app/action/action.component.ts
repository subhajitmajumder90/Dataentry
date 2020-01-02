import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  formData: FormGroup;
  slist:any;
  chkid:any;
  cond:boolean=false;

  constructor(private formBuilder:FormBuilder, private usserv:UsersService,private router:Router) { }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      fname : ['',Validators.required],
      lname : ['',Validators.required]
    });
    this.showdata();
  
   
  }
  insert(){
    this.usserv.setlist(this.formData.value).subscribe(
      res=>{
        if(res=="inserted"){
          this.showdata();
        }
        else{
          console.log("error")
        }
      }
    );
  }
  
  editdata(Id:any){
    if(this.cond==false){
    this.cond=true;
    this.chkid=Id;
    }
    else{
      this.cond=false;
    }
  }
  showdata(){
     this.usserv.getdata().subscribe(
      res=>{
        this.slist=res.data;
        console.log((res.data));
      }
    )
  }
  postdata(){
      this.usserv.setlist(this.formData.value).subscribe((data:any)=>{
        this.usserv.getdata().subscribe(
          res=>{
            this.slist=res.data;
            console.log((res.data));
          }
        )
      })
  }
  deldata(id:any){
    this.usserv.deleterow(id).subscribe(
        res=>{
          if(res=="Success"){
            this.showdata();
          }
          else{
            console.log("error")
          }
          
          
        },
        err=>{
          console.log(err)
        }
      )
  }
  
 

}
