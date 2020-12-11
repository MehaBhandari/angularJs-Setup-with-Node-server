var initializeRouting = function(app) {
	app.get('/', function(req, res) {
		var result = {"description" : "Hello world"};
		res.render('layout', {});
	})

	app.get('/dash',function(req,res){
		res.render('dahboard')
	})

	app.get('/:name', function(req, res) {
		res.render('layout', {});
	})

	app.get('/index/:view', function(req, res) {
		res.render('index/' + req.param('view'), {});
	});
};

module.exports.initializeRouting = initializeRouting;
