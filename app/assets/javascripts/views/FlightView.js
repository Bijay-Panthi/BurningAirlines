var app = app || {};

app.FlightView = Backbone.View.extend({
  el:'#app',

  render: function () {
    var flight = this.model;

    var templateMarkup = $("FlightViewTemplate").html();
    var actualTemplate = _.template(templateMarkup);
    var compiledMarkup = actualTemplate(post.toJSON());

    this.$el.html(compiledMarkup);
  }
});
