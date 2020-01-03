import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient:HttpClient) { }
  retrieveData():Observable<any>{
     return this.httpClient.get<any>('http://localhost:4000/getuser');
    
  }
  deleteData(id:any){
    return this.httpClient.post('http://localhost:4000/deletebypost',id)
  }
  insertData(data:any){
    return this.httpClient.post('http://localhost:4000/Insertdata',data)
  }
}
