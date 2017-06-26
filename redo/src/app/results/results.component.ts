import { Component, OnInit } from '@angular/core';
import { BidService } from './../bid.service';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  products: any =[{ number: 1, name: 'Red Bull Red', img: 'http://image.redbull.com/rbx00264/0100/0/406/products/packshots/en_US/USA_355_RB_YELLOW_SingleUnit_closed_cold_front.png', bids: []},
                  { number: 2, name: 'Red Bull Original', img: 'http://image.redbull.com/rbx00264/0100/0/406/products/packshots/en_US/USA_355_RBED_SingleUnit_closed_cold_front_0.png', bids: []},
                  { number: 3, name: 'Red Bull Total Zero', img: 'http://image.redbull.com/rbx00264/0100/0/406/products/packshots/en_US/US_RBZE_355_Single%20Unit_close_cold_ORIGINAL_DRES%20(2).png', bids: []}]
  currentUser: any = {};
  constructor(private _bidService: BidService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.getTopBid(1);
    this.getTopBid(2);
    this.getTopBid(3);
    this.getCurrent();
  }
  getTopBid(prod) {
    this._bidService.getTop(prod)
    .then( (data) => {
      console.log("The data in getTopBids ", data)
      this.products[prod-1].bids = data;
    })
    .catch( (err) => console.log('Problem getting bids'))
  }

  reset() {
    this._bidService.resetBids()
    .then(() => this._router.navigate(['/bids']))
    .catch((err) => console.log(err, 'while deleting errthing'))
  }
  logOut() {
    console.log("Leaving...")
    this._bidService.LogOut()
    .then( (data) => {this._router.navigate(['/'])})
    .catch((err) => console.log('did not log out successfully'))
  }
  getCurrent() {
    this._bidService.getCurrent()
    .then((data) => this.currentUser = data)
    .catch( err => console.log('trouble getting currentUser'))
  }

}
