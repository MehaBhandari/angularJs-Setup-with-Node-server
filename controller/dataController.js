var fs = require('fs');
var userDataArrFunc = function(app) {
    app.get('/api/userdata', function(req, res){
        fs.readFile('./public/dataFiles/userDataArr.json', function(err, data){
            var parsedData = JSON.parse(data);
            res.send(parsedData);       
        })
    });

    app.get('/app/mydata', function(req,res){
        fs.readFile('./public/dataFiles/myjson.json', function(err,data){
            var outputdata = JSON.parse(data);
            res.send(outputdata)
        })
    })

    app.get('/api/userdata/:id', function(req, res){
        var idVal = req.params.id;
        fs.readFile('./public/dataFiles/userDataArr.json', function(err, data){
            var parsedData = JSON.parse(data);

            console.log(parsedData.filter((data) => {
                return data.id == idVal;
            }));
            
            var userInfo = parsedData.filter(x => x.id == idVal);
            res.send(userInfo[0]);       
        })
    });
}

module.exports.userDataArr = userDataArrFunc;