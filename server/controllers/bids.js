var mongoose = require('mongoose');
var User = mongoose.model('User');
var Bid = mongoose.model('Bid');

module.exports = {

	login: function(req, res) {
		console.log('came into controller.login server')
		User.findOne(req.body, function(err, userFound) {
			if (userFound == null) {
				var newUser = new User(req.body);
				newUser.save(function(err, newUse) {
					if(err) {
						console.log(err);
					} else {
						req.session.currentUserId = newUse._id;
						console.log('new user was created')
						res.json(newUse)
					}
				})
			} else {
				req.session.currentUserId = userFound._id;
				console.log('existing user was loaded! ', userFound.name)
				res.json(userFound);
			}
		})
	},
	
	logout: function(req, res) {
		req.session.destroy();
		res.sendStatus(200);
	},

	placeBet: function(req, res) {
		Bid.find({product: req.body.product}).sort('-amount').limit(1).exec( function (err, bidlist) {
			if(err) {
				console.log("error placing the bet, ", err)
			} else {
				console.log('this is the bidlist, ', bidlist, ' and req.body ', req.body)
				if (bidlist.length && bidlist[0].amount>=req.body.amount) {
					res.json({error: 'Bet needs to be higher than current Highest Bid'})
				} else {
					var newBid = new Bid({ product: req.body.product, _user: req.session.currentUserId, amount: req.body.amount})
					newBid.save(function(err, newBid) {
						if(err) {
							console.log('problem saving the newBid')
						} else {
							res.json(newBid)
						}
					})
				}
			}
		})
	},

	getBets: function(req, res) {
		Bid.find({product: req.params.id}).sort('-amount').populate('_user').exec(function(err, theList) {
			if (err) {
				console.log('Error while getting the bets ',err)
			} else {
				res.json(theList);
			}
		})
	},
	getTop: function (req, res) {
		console.log(req.params.id)
		Bid.find({product: req.params.id}).sort('-amount').populate('_user').limit(1).exec( function (err, theWinner) {
			if (err) {
				console.log('Error grabbing the winner');
			} else {
				console.log(theWinner)
				res.json(theWinner)
			}
		})
	},

	reset: function(req, res) {
		Bid.remove({}, function(err) {
			if(err) {
				console.log('Error while deleting Err thing');
			} else {
				res.sendStatus(200);
			}
		})
	},

	current: function(req, res) {
		User.findOne({_id: req.session.currentUserId}, function(err, currents) {
			if(err) {
				console.log('Error while getting current User ', err)
			} else {
				res.json(currents)
			}
		})
	}





















}