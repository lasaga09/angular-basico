import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products =[
    {id:1,name:"huevo",description:"de gallina",category:"sin",price:5.50},
    {id:2,name:"leche",description:"de gloria",category:"sin",price:56.50},
    {id:3,name:"carne",description:"de gallina",category:"sin",price:9.50},
    {id:4,name:"atun",description:"de gallina",category:"sin",price:12.50},
    {id:5,name:"pan",description:"de gallina",category:"sin",price:9.50},
    {id:6,name:"tallarin",description:"de gallina",category:"sin",price:8.50},
  ]
  getAllProducts(){
    return this.products;
  }
  getProductsById(id){
    return this.products.filter((prod)=>prod.id == id);

  }
}
