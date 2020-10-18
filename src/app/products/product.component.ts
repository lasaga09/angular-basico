import { Component, Input } from '@angular/core';

@Component({
    selector:'app-products',
    template:`      
    <h2>
        <a [routerLink]="['/products', p.id]" routerLinkActive="router-link-active" >{{p.name}}</a>
    </h2>
    <div> Precio: {{p.price}}</div>
    
    `,
})


export class ProductComponent{
@Input() p;

}