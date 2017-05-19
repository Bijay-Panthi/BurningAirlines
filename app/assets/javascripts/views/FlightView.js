var app = app || {};

app.FlightView = Backbone.View.extend({
  el:'#details',

  render: function () {

    var flight = this.model;
    var templateMarkup =
     $("#FlightDetailsTemplate").html();
    var actualTemplate = _.template(templateMarkup);
    var compiledMarkup = actualTemplate(flight.toJSON());
    this.$el.append(compiledMarkup);
  }
});
