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
    console.log('a new flight has been created');
  }
});

// var f1 = new app.Flight();
// console.log(f1.toJSON());
// var f2 = new app.Flight();
// console.log(f2.toJSON());
// var f3 = new app.Flight({
//   flight_number: 2345,
//   origin: 'Cairns',
//   destination: 'Brisbane',
//   date: 568798,
//   plane: 2
// });
// console.log(f3.toJSON());
