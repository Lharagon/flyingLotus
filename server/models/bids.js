var mongoose = require('mongoose');
var Schema = mongoose.Schema

var BidSchema = new mongoose.Schema({
	product: { type: String, required: true },
	_user: { type: Schema.Types.ObjectId, ref: 'User'},
	amount: { type: Number, required: true, min: 1 }
});

mongoose.model('Bid', BidSchema);