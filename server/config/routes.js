var controller = require('./../controllers/bids.js');
var path = require('path');

function authenticate(req,res,next){
	if(req.session.currentUserId){
		next();
	}else{
		res.sendStatus(401);
	}
}

module.exports = function(app) {

	// app.post('/api/login', controller.login);
	app.post('/api/login', controller.login);
	app.use(authenticate);
	app.get('/api/getOut', controller.logout);
	app.post('/api/Bet', controller.placeBet);
	app.get('/api/getBets/:id', controller.getBets);
	app.get('/api/getTop/:id', controller.getTop);
	app.get('/api/reset', controller.reset);
	app.get('/api/getCurrent', controller.current);


	app.all('*', (req, res, next) => {
	  res.sendFile(path.resolve('./redo/dist/index.html'))
	})


}