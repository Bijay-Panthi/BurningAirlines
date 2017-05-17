var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: '/flights',

  model: app.Flight,

  initialize: function () {

    console.log('A new flight collection has been created');
  }
});
