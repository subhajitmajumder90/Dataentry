import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {
  UploadForm:FormGroup
   abc:any;

  constructor(private formuploadBuilder:FormBuilder, private serv:UsersService){
    this.UploadForm=this.formuploadBuilder.group({

      sampleFile:['',Validators.required]
    });
   }

  ngOnInit() {
  }
  showfile(val){
    this.abc=val.target.files;
  }
  upload(){
    console.log(this.abc);
    this.serv.fileUpload(this.abc).subscribe(res=>{
      if(res=='success'){
         console.log(res); 
      }
      else{
         console.log('Error');
      }
    },
    err=>{
      console.log(err)
    })
  }

}
