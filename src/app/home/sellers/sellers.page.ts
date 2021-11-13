import { Component, OnInit } from '@angular/core';
import { SellersService } from '../../services/sellers.service';
import { Seller } from '../../interfaces/Sellers';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.page.html',
  styleUrls: ['./sellers.page.scss'],
})
export class SellersPage implements OnInit {  
  public sellers: Seller[] = []
  public loading = true

  constructor(
    private _sellersService: SellersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getSellers()
  }

  getSellers = async() => {
    const sellers: any = await this._sellersService.getSellers({})
    this.sellers = sellers.data
    this.loading = false
  }

  goToSeller = (sellerId) => {
    this.router.navigate(['info', sellerId], { relativeTo: this.activatedRoute})
  }

  addSeller = () => {
    this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute})
  }
}
