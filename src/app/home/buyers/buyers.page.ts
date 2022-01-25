import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { BuyersService } from '../../services/buyers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.page.html',
  styleUrls: ['./buyers.page.scss'],
})
export class BuyersPage implements OnInit {
  buyers = []
  public loading = true

  constructor(
    private _sharedService: SharedService,
    private _buyersService: BuyersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }
    
  ionViewWillEnter() {
    this.getBuyers()
  }

  addBuyer = () => {

  }

  getBuyers = async() => {
    const loading = await this._sharedService.presentLoading()
    const sellers: any = await this._buyersService.getBuyers({})
    this.buyers = sellers.data
    this.loading = false
    loading.dismiss()
  }

  goToBuyer = (buyerId) => {
    this.router.navigate(['info', buyerId], { relativeTo: this.activatedRoute})
  }

  addSeller = () => {
    this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute})
  }

}
