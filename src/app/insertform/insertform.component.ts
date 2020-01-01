import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-insertform',
  templateUrl: './insertform.component.html',
  styleUrls: ['./insertform.component.scss']
})
export class InsertformComponent implements OnInit {
  formData: FormGroup;
  slist:any;

  constructor(private formBuilder:FormBuilder, private usserv:UsersService) { }

  ngOnInit() {
      this.formData = this.formBuilder.group({
        id : ['',Validators.required],
        fname : ['',Validators.required]
      });
      this.onSubmit();

  }

  onSubmit(){
    if(this.formData.invalid){
      return;
    }else{
     
      this.usserv.getList(this.formData.controls.id.value,this.formData.controls.fname.value).subscribe(
        res=>{
          this.slist=res;
          console.log((res));
        }
      )
    }
  }

}
