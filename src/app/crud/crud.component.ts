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
  bool:boolean=false;
  constructor(private crudservice:CrudService,private formbuilder:FormBuilder) {
    this.InsertForm=formbuilder.group({
      Id:['',Validators.required],
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
       this.InsertForm.reset();
       if(res=="inserted"){
         this.getdata();
         
       }
     }
   );
 }
 updateCRUD(){
   let updata:any={
     
     fname:this.InsertForm.controls.fname.value,
     lname:this.InsertForm.controls.lname.value,
     Id:this.InsertForm.controls.Id.value,

   }

     this.crudservice.updateData(updata).subscribe(
         res=>{
        this.InsertForm.reset();
        if(res=="Success"){
          this.getdata();
        }
        else{
          console.log("notUpdate")
        }
      }
    )
   
  
 
 }
 fetchCRUD(Id:any){
   if(this.bool==false){
     this.bool=true;
    this.crudservice.fetchData(Id).subscribe(
      res=>{
        if(res.stat="Success"){
          delete res.data.gender;
          delete res.data.did;
          delete res.data.image;
          this.InsertForm.setValue(res.data)
          
        }
      }
    )

   }
   else{
     this.bool=false;
     this.crudservice.fetchData(Id).subscribe(
      res=>{
        if(res.stat="Success"){
          delete res.data.gender;
          delete res.data.did;
          delete res.data.image;
          this.InsertForm.setValue(res.data)
          
        }
      }
    )



   }

 }



  }
  

