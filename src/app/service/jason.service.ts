import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JasonService {
  public baseURL="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }
  
  public displayjason(){
    return this.http.get(`${this.baseURL}`)
  }
  public getUserId(id:any){
    return this.http.get(`${this.baseURL}/${id}`)
  }
}

