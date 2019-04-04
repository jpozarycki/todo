import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldService() {
    // const basicAuthHeaderString = this.createBasicAuthHttpHeader();
    // const headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean/'
      // , ({headers})
    );
  }

  executeHelloWorldWithPathVariableService(name) {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/${name}`);
  }

  // createBasicAuthHttpHeader() {
  //   const username = 'user';
  //   const password = 'password';
  //   const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //
  //   return basicAuthHeaderString;
  // }
}
