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
  private _keys = [];
  
  get selected() {return this._selectedNode; }
  get root() {
    if (this._rootNode !== null) {
      return this._rootNode;
    }
    
    return this.get(0).subscribe(n => {
      let children: Node[] = [];
      let node = new Node();
      Object.keys(node).forEach(key => console.log(key));
      // console.log(Object.getOwnPropertyNames(node));
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
        // preload object keys from root node
        if (id === 0) {
          Object.keys(response).forEach(key => {this._keys.push(key);});
        }
        console.log(this._keys);
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
