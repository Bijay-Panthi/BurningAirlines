var app = app || {};
app.Flight = Backbone.Model.extend({
  urlRoot: "/airplanes",
  defaults:{
    row: 0,
    column: 0,
    name: " "
  },
  initialize: function(){
    console.log(" From Flight");
  }
});

var a1 = new app.Flight();
console.log(a1.toJSON());
var a2 = new app.Flight();
console.log(a2.toJSON());
