var express  = require('express');
var app      = express();
var db = require('./zipcodes.js')

app.use(express.static('public/startbootstrap-full-width-pics-gh-pages'));
var cors = require('cors');
app.use(cors());


app.get('/data/:library/:park/:garden/:gallery', function(req,res){
    var library_input  = req.params.library
    var park_input = req.params.park
    var garden_input = req.params.garden
    var art_input = req.params.gallery
    var result = []
    db.forEach(function(item){
        var zip = item.id
        var library_weight = (item.library_score * library_input)/100
        var park_weight = (item.park_score * park_input)/100
        var garden_weight = (item.garden_score * garden_input)/100
        var art_weight = (item.art_score * art_input)/100
        var total_score = library_weight + park_weight + garden_weight + art_weight
        result.push({zipcode: zip, score: total_score})
    })
    result.sort (function(a,b) {
        return a.score - b.score;
    })
    console.log(result)
    var answer = "1) " + result[result.length-1]["zipcode"] + "<br>" + "2) " + result[result.length-2]["zipcode"] + "<br>" + "3) " + result[result.length-3]["zipcode"]
    res.send(answer.toString());
    console.log(answer)
})

app.listen(3000, function(){
    console.log('Running on port 3000');
})
