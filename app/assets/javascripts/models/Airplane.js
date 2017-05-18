var app = app || {};
app.Airplane = Backbone.Model.extend({
  urlRoot: "/airplanes",

  defaults:{
    row: 0,
    column: 0,
    name: " "
  },
  initialize: function(){
    console.log(" From Airplane");
  }
});

var a1 = new app.Airplane();
console.log(a1.toJSON());
var a2 = new app.Airplane();
console.log(a2.toJSON());
