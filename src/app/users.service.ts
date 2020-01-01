import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpss:HttpClient) { }
  getList(id:number,fname:string):Observable<any>{
    return this.httpss.get<any>('http://localhost:4000/getuser/'+id+'/'+fname);
    
  }
  setlist(insertdata:any){
    return this.httpss.post('http://localhost:4000/Insertdata',insertdata);
  }
  
}