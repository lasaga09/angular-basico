import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/data.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent implements OnInit {
 public products =[]
  constructor(private dataserv:DataService) { }

  ngOnInit(): void {
    this.products=this.dataserv.getAllProducts();
    console.log(this.products)
    console.log("sdfsf")
  }

}
