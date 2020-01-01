import { Component, OnInit } from '@angular/core';
import{ FormBuilder,FormGroup,Validators} from '@angular/forms';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.scss']
})
export class InsertdataComponent implements OnInit {
  insertYOU:FormGroup;

  constructor(private formbldr:FormBuilder,private firstserv:UsersService) { }

  ngOnInit() {
    this.insertYOU=this.formbldr.group({
      fname:["",Validators.required],
      lname:["",Validators.required]
    }
     
    );

    
  }
  addformdata(){
   
    this.firstserv.setlist(this.insertYOU.value).subscribe(
      (res:any)=>{
        if(res.status){
          console.log(res);
        }
      },
      (err:any)=>{
        console.log(err);
      }
    );
    
  }
}
