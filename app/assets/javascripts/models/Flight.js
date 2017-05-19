var app = app || {};


app.Flight = Backbone.Model.extend({
  urlRoot: "/#flights", //?

  defaults: {
    flight_number: 0,
    origin: '',
    destination: '',
    date: 09052017,
    plane: 1
  },

  initialize: function () {

  }
});

// var f1 = new app.Flight({
//   flight_number: 2345,
//   origin: 'Sydney',
//   destination: 'Brisbane',
//   date: 568798,
//   plane: 2
// });
// var f2 = new app.Flight({
//   flight_number: 2345,
//   origin: 'Cairns',
//   destination: 'Melbourne',
//   date: 568798,
//   plane: 2
// });
// var f3 = new app.Flight({
//   flight_number: 2345,
//   origin: 'Sydney',
//   destination: 'Melbourne',
//   date: 568798,
//   plane: 2
// });
// var f4 = new app.Flight({
//   flight_number: 2345,
//   origin: 'Melbourne',
//   destination: 'Perth',
//   date: 568798,
//   plane: 2
// });
// console.log(f1.toJSON());
// console.log(f2.toJSON());
// console.log(f3.toJSON());
// console.log(f4.toJSON());
