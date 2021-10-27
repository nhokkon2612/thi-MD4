import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books:any = []
  constructor(private httpClient: HttpClient) { }

  getAllBook():Observable<any>{
    return this.httpClient.get("http://127.0.0.1:8081/books")
  }
}
