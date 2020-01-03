import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CRUDComponent implements OnInit {
  datalist:any;
  InsertForm:FormGroup;
  constructor(private crudservice:CrudService,private formbuilder:FormBuilder) {
    this.InsertForm=formbuilder.group({
      fname:['',Validators.required],
      lname:['',Validators.required]
    });
  }

  ngOnInit() {
    this.getdata();
  }
  getdata(){
    this.crudservice.retrieveData().subscribe(
      res=>{
        console.log(res.data);
        this.datalist=res.data;

      },
      err=>{
        console.log(err);
      }
    );
 }
 deleteCRUD(id){
   let ID:any={
    id:id
   }
   this.crudservice.deleteData(ID).subscribe(
     res=>{
       if(res=="Success"){
        console.log("delete data");
        this.getdata();
       }
       
     }
   )

 }
 insertCRUD(){
   this.crudservice.insertData(this.InsertForm.value).subscribe(
     res=>{
       if(res=="inserted"){
         this.getdata();
       }
     }
   );
 }



  }
  

