import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ErrorHttpHandleService {

  constructor(private toastr: ToastrService) { }

  errorHandle(err: HttpErrorResponse, componentName: any) {
    this.toastr.error('something is not right', ' Error   (' + err.status + ')', {
      timeOut: 3000,
    });
  }
}
