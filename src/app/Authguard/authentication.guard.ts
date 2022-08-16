import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from '../Services/AuthGuardService/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  
  constructor(private authguard:AuthguardService, private router:Router) {}

  canActivate(): boolean {
    if(!this.authguard.gettoken())
    {
      this.router.navigateByUrl('login');
    }
    return this.authguard.gettoken();
  }
}
