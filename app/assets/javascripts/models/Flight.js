var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: "/flights",

  defaults: {
    flight_number: 1,
    origin: '',
    destination: '',
    date: 09052017,
    plane: 1
  },

  initialize: function () {
    console.log('a new flight has been created');
  }
});

var f1 = new app.Flight();
console.log(f1.toJSON());
var f2 = new app.Flight();
console.log(f2.toJSON());
var f3 = new app.Flight({
  row: 75,
  column: 10,
  name: '747'
});
console.log(f3.toJSON());
