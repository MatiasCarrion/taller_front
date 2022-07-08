import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getAll(path: string) {
    return this.http.get(environment.baseURL + path);
  }

  getOne(path: string, id: Number) {
    return this.http.get(environment.baseURL + path + "/" + id);
  }

}
