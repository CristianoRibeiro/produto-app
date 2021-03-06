import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CategoryService {

  baseUri: string;
  headers: Headers

  constructor(public http: Http) {
    this.baseUri = "https://product-api-christiribeiro2011.c9users.io/api/category";
  }

  findAll(){
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUri)
        .map(res => res.json())
        .subscribe(data => {
            resolve(data);
        },error => {
          reject(error);
        });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.baseUri + '/' + id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });

  }


  insert(category){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return new Promise((resolve, reject) => {
      this.baseUri = "https://product-api-christiribeiro2011.c9users.io/api/category";
      this.http.post(this.baseUri, JSON.stringify(category), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
            resolve(data);
          }, error => {
            reject(error);
        });
    });
  }


  update(category) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return new Promise((resolve, reject) => {
      this.http.put(this.baseUri, JSON.stringify(category), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });

  }


}
