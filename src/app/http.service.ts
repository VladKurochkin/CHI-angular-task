import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getData(){
        // return this.http.get('http://jsonplaceholder.typicode.com/posts/1')
        return this.http.get('assets/current-loans.json')
    }
}