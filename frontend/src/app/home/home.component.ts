import { Component, OnInit } from '@angular/core';
import { Node } from '../node';
import { NodeService, User } from '../node.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selected: Node = null;
  
  constructor(private service: NodeService) { }

  ngOnInit() {
    this.service.get(1).subscribe(n => {
      this.selected = Object.assign(new User(), n);
      console.log(this.selected);
    });
  }

}
