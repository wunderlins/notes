import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Node } from './node';
import 'rxjs/add/operator/map';

@Injectable()
export class NodeService {
  private apiUrl = 'http://localhost:8181/api/node/';
  private _rootNode = null;
  private _selectedNode = null;
  
  get selected() {return this._selectedNode; }
  get root() {
    if (this._rootNode !== null) {
      return this._rootNode;
    }
    
    return this.get(0).subscribe(n => {
      let children: Node[] = [];
      this._rootNode = Object.assign(new Node(), n);
      this._rootNode.children = children;
      console.log(this._rootNode);
      return this._rootNode;
    });
  }
  
  constructor(private http: HttpClient) { }

  get(id: number): Observable<Node> {
    return this.http.get(this.apiUrl + id)
      .map((response: Response) => {
        return response;
      }
    );
  }
  
  getChildren(id: number): Observable<{}> {
    return this.http.get(this.apiUrl + id + '/children');
  }
  
  create() {}
  update() {}
  delete() {}
  
  private createNodeFromObservable(n: Node) {
    let children: Node[] = [];
    let node = Object.assign(new Node(), n);
    //node.children = children;
    return node;
  }
}
