import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Node } from './node';


export class User {
  constructor(
		login = "",
		id = -1,
		node_id = "",
		avatar_url = "",
		gravatar_id = -1,
		url = "",
		html_url = "",
		repos_url = "",
		events_url = "",
		received_events_url = "",
		type = "",
		site_admin = false
  ) {}
}

@Injectable()
export class NodeService {
  // private apiUrl = 'http://localhost:8181/api/node/';
  private apiUrl = 'https://api.github.com/users/';
  
  constructor(private http: HttpClient) { }

  get(id: number): Observable<User> {
    return this.http.get(this.apiUrl + id);
  }
  create() {}
  update() {}
  delete() {}
}
