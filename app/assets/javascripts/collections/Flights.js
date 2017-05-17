var app = new Backbone.Collection.extend({
  urlRoot: "/airplanes",
  model: app.Flights,
  initialize: function(){
    console.log("A collection is made");
  }
});
var er = new app.Flights();
