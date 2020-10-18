import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {DataService} from '../../shared/data.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.scss']
})
export class DetailProductsComponent implements OnInit {
 public products:any={};
  constructor(
    private route: ActivatedRoute,
    private dataServ:DataService,
    private location:Location,
    )
     { }

  ngOnInit(): void {
    const product_id = this.route.snapshot.paramMap.get('id');
    [this.products] = this.dataServ.getProductsById(product_id);
    
  }
  goBack():void{
   this.location.back();
  }

}
