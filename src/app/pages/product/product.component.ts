import { Component } from '@angular/core';
import { CardComponent } from "../../UI/card/card.component";
import { ApiService } from '../../api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(public api: ApiService,private route: ActivatedRoute) {}
  item: any;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.api.getDataById(id).subscribe((data:any)=> {
      this.item = data;
      console.log(this.item);
    });
  }

}
