// low     = require('lowdb');
// var libraries = require('./libraries.json');
//var parks = require('./parks.json');
//var gardens = require('./gardens.json');
//var galleries = require('./galleries.json');
var stores = require('./stores.json');
// var fs      = require('lowdb/adapters/FileSync');
// var adapter = new fs('db.json');
// var db      = low(adapter);

// init the data store
//db.defaults({library:[]}).write();
// libraries.locations.forEach(function(item){
//     var address = item.data.address;
//     var last5Char = address.substr(address.length - 5);
//     var locations = {
//         address: item.data.address,
//         library_name: item.data.title,
//         zipcode: last5Char
//     };
// db.get('library').push(locations).write()
// })


// db.defaults({park:[]}).write();
// parks.forEach(function(item){
//     if(item.Zip){
//         if(item.Prop_ID.charAt(0) == 'B'){
//         var locations = {
//             address: item.Location,
//             park_name: item.Name,
//             zipcode: item.Zip
//         };
//         db.get('park').push(locations).write()
//     }
// }
// })

// db.defaults({garden:[]}).write();
// gardens.data.forEach(function(item){
//     if (item[20]){
//         if(item[9] == 'B'){
//         var locations = {
//             address: item[13],
//             garden_name: item[12],
//             zipcode: item[20],
//         };
//         db.get('garden').push(locations).write()
//     }
// }
// }) 

// db.defaults({gallery:[]}).write();
// galleries.data.forEach(function(item){
//     if(item[15]){
//         if(item[14] == 'Brooklyn'){
//             var locations = {
//                 address: item[12],
//                 gallery_name: item[9],
//                 zipcode: item[15].substr(0,5),
//             };
//             db.get('gallery').push(locations).write()
//         }
//     }
// })

// db.defaults({store:[]}).write();
// stores.data.forEach(function(item){
//     if(item[12]){
//         if(item[11] == 'Brooklyn'){
//             var locations = {
//                 address: item[9] + item[10],
//                 store_name: item[8],
//                 zipcode: item[12],
//             };
//             db.get('store').push(locations).write()
//         }
//     }
// })

// stores.data.forEach(function(item){
//     console.log(item[12]);
//     console.log(item[11]);
//     console.log(item[9]+item[10])
//     console.log(item[8])
// })
// console.log(stores.data.length)