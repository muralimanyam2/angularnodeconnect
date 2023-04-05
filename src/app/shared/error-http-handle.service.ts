import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ErrorHttpHandleService {
  private _isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); //main for
  public isAuthenticatedObs: Observable<boolean> = this._isAuthenticatedSubject.asObservable(); //navbar changing after login

  constructor(private toastr: ToastrService, private route: Router) {
  }

  errorHandle(err: HttpErrorResponse, componentName: any) {
    console.log(err);
    this.toastr.error('something is not right', ' Error   (' + err.status + ')', {
      timeOut: 3000,
    });
  }

  makeIsAuthenticateTrue() {
    this._isAuthenticatedSubject.next(true);
  }

  makeIsAuthenticateFalse() {
    this._isAuthenticatedSubject.next(false);
  }
}
