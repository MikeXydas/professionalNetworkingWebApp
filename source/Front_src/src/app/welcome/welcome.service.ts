import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GlobalVariable } from '../global'
import { HttpHeaders } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import {Router} from "@angular/router";

import { LoginForm } from './loginForm'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'responseType': 'text/plain'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private http: HttpClient,
              private router: Router) { }

    login(loginForm : LoginForm) {
        return this.http.post<any>(GlobalVariable.BASE_API_URL + `User/login`, loginForm, httpOptions)
            .pipe(map(user => {
                //console.log("User exists");
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            }));
    }

    getLoginedUser() {
      let decoded = jwt_decode(localStorage.getItem('currentUser'));
      return decoded.sub;
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['']);
    }
}
