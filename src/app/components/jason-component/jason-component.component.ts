import { Component, OnInit } from '@angular/core';
import { JasonService } from 'src/app/service/jason.service';

@Component({
  selector: 'app-jason-component',
  templateUrl: './jason-component.component.html',
})
export class JasonComponentComponent implements OnInit {
jasonArr:any[]=[];
  constructor(private jasonService:JasonService) { }
ngOnInit(): void {
  this.getAllUsers();
  }
  getAllUsers(){
    this.jasonService.displayjason().subscribe(
      (response:any)=>{
        console.log(response)
        this.jasonArr=response;  
      },(error)=>{
        console.log(error)
      }
    )
  }
}
