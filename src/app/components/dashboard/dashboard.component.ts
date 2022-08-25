import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/DataService/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  value:any;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router,
    private dataservice:DataService,private snackbar:MatSnackBar) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  Account() {
    console.log("Logout");
    localStorage.removeItem("token");
    this.router.navigateByUrl('login');
    this.snackbar.open('Logout Successful','Ok',{duration:3000,horizontalPosition:'left'});
  }

  Search(event:any){
    console.log("input = ", event.target.value);
    this.value = event.target.value
    let data = {
      type: 'search',
      data: [this.value]
    }
    this.dataservice.changeData(data)
  }

  ngOnInit() {
  }

  // ngOnDestroy(): void {
  //   this.mobileQuery.removeListener(this._mobileQueryListener);
  // }
}
