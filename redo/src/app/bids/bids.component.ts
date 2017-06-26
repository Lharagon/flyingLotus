import { Component, OnInit } from '@angular/core';
import { BidService } from './../bid.service';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {
  products: any =[{ number: 1, name: 'Red Bull Red', img: 'http://image.redbull.com/rbx00264/0100/0/406/products/packshots/en_US/USA_355_RB_YELLOW_SingleUnit_closed_cold_front.png', bids: []},
                  { number: 2, name: 'Red Bull Original', img: 'http://image.redbull.com/rbx00264/0100/0/406/products/packshots/en_US/USA_355_RBED_SingleUnit_closed_cold_front_0.png', bids: []},
                  { number: 3, name: 'Red Bull Total Zero', img: 'http://image.redbull.com/rbx00264/0100/0/406/products/packshots/en_US/US_RBZE_355_Single%20Unit_close_cold_ORIGINAL_DRES%20(2).png', bids: []}]
  bid1: any = { product: 1, amount: null}
  bid2: any = { product: 2, amount: null}
  bid3: any = { product: 3, amount: null}
  error: any = '';

  constructor(private _bidService: BidService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.getAllBids(1);
    this.getAllBids(2);
    this.getAllBids(3);

  }
  logOut() {
    console.log("Leaving...")
    this._bidService.LogOut()
    .then( (data) => {this._router.navigate(['/'])})
    .catch((err) => console.log('did not log out successfully'))
  }
  alerted() {
    console.log('Hello')
    if (this.products[0].bids.length && this.products[1].bids.length && this.products[2].bids.length) {
      this._router.navigate(['/results'])
    } else {
      alert('All Products need Bid to continue');
    }
  }
  placeBid(productnumber, amount) {
    this.error = '';
    this._bidService.placeBid({product: productnumber, amount: amount.value})
    .then( (data) => {
      if(data.hasOwnProperty('error')) {
        this.error = data.error
      }
    })
    .catch( (err) => console.log(err, 'hello'))
    this.getAllBids(productnumber);
  }
  getAllBids(prod) {
    this._bidService.getBids(prod)
    .then( (data) => {
      this.products[prod-1].bids = data;
    })
    .catch( (err) => console.log('Problem getting bids'))
  }

}
