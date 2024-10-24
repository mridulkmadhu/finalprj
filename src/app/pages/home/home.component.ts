import { Component } from '@angular/core';
import { CardComponent } from "../../UI/card/card.component";
import { ApiService } from '../../api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public api: ApiService) {}
  products: any = []

  ngOnInit(): void{


    this.api.getData().subscribe((data: any) => {
      this.products = data;

    });
  }

}



