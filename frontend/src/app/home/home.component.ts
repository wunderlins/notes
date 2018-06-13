import { Component, OnInit } from '@angular/core';
import { Node } from '../node';
import { NodeService } from '../node.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  root: Node = null;
  
  constructor(private service: NodeService) { }

  ngOnInit() {
    this.root = this.service.root;
    this.service.getChildren(0).subscribe(el => {
      console.log(el);
    });
  }

}
