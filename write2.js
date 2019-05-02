low     = require('lowdb');
var libraries = require('./librariesdb.json');
var parks = require('./parksdb.json');
var gardens = require('./gardensdb.json');
var galleries = require('./galleriesdb.json');
var calculation = require('./calculation.js')
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

var myZips = [11212, 11213, 11216, 11233, 11238, 11209, 11214, 11228, 11204, 11218, 11219, 11230, 11234, 11236, 11239, 11223, 11224, 11229, 11235, 11201, 11205, 11215, 11217, 11231, 11203, 11210, 11225, 11226, 11207, 11208, 11211, 11222, 11220, 11232, 11206, 11221, 11237]

var matchingLibs = function(data, myZip){
    var res = data.library
    .filter(function(item){
        return (item.zipcode == myZip);
    });
    return res;
}
var matchingParks = function(data, myZip){
    var res = data.park
    .filter(function(item){
        return (item.zipcode == myZip);
    });
    return res;
}
var matchingGardens = function(data, myZip){
    var res = data.garden
    .filter(function(item){
        return (item.zipcode == myZip);
    });
    return res;
}
var matchingArt = function(data, myZip){
    var res = data.gallery
    .filter(function(item){
        return (item.zipcode == myZip);
    });
    return res;
}

finalLibs= []
finalParks= []
finalGardens=[]
finalArt =[]
myZips.forEach(function(myZip){
    var final = matchingLibs(libraries, myZip)
    finalLibs.push(final)
    var final = matchingParks(parks, myZip)
    finalParks.push(final)
    var final = matchingGardens(gardens, myZip)
    finalGardens.push(final)
    var final = matchingArt(galleries, myZip)
    finalArt.push(final)
})


db.defaults({zipcodes:[]}).write();
counter = 0
myZips.forEach(function(code){
        var zones = {
            id: code,
            libraries: finalLibs[counter],
            library_score: libRank2[counter],
            parks: finalParks[counter],
            park_score: parkRank2[counter],
            gardens: finalGardens[counter],
            garden_score: gardenRank2[counter],
            art_galleries: finalArt[counter],
            art_score: artRank2[counter]
        }
        counter = counter+1      
    db.get('zipcodes').push(zones).write()
})