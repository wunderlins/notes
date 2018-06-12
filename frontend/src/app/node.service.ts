import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Node } from './node';

@Injectable()
export class NodeService {
  private apiUrl = 'http://localhost:8181/api/node/';
  constructor(private http: HttpClient) { }

  get(id: number): Observable<Node> {
    return this.http.get(this.apiUrl + id);
  }
  create() {}
  update() {}
  delete() {}
}
