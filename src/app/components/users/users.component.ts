import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JasonService } from 'src/app/service/jason.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public selectedId: any;
  public userArry:any;
  constructor(private router: Router, private activate: ActivatedRoute, private jason: JasonService) { }
  ngOnInit(): void {
    this.selectedId = this.activate.snapshot.params['id']
    console.log(this.selectedId);
    this.displayUser();
  }
  public displayUser() {
    return this.jason.getUserId(this.selectedId).subscribe(
      (response) => {
        console.log(response)
        this.userArry=response;
      }, (error) => {
        console.log(error)
      }
    )
  }
}


