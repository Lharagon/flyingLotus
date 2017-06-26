import { Component, OnInit } from '@angular/core';
import { BidService } from './../bid.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {name: ''};

constructor(private _bidService: BidService, private _route: ActivatedRoute, private _router: Router) {}
    login() {
      this._bidService.login(this.user)
      .then((data) => {console.log(data); this._router.navigate(['/bids']);})
      .catch((err) => console.log(err))
    }
    ngOnInit() {
    }
}
