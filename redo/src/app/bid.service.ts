import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class BidService {

  constructor(private _http: Http) { }
  login(User) {
    return this._http.post('/api/login', User).map(data=>data.json()).toPromise();
  }
  LogOut() {
    return this._http.get('/api/getOut').map(data=>data.json()).toPromise();
  }
  placeBid(newBet) {
    return this._http.post('/api/Bet', newBet).map(data=>data.json()).toPromise();
  }
  getBids(productNum) {
    return this._http.get('/api/getBets/'+productNum).map(data=>data.json()).toPromise();
  }
  getTop(productNum) {
    return this._http.get('/api/getTop/'+productNum).map(data=>data.json()).toPromise();
  }
  resetBids() {
    return this._http.get('/api/reset').toPromise();
  }
  getCurrent() {
    return this._http.get('/api/getCurrent').map(data=>data.json()).toPromise();
  }
}
