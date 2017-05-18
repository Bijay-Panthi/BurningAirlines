var app = app || {};

app.SearchView = Backbone.View.extend({
  el:'#search',

  render: function () {
    var search = this.model;
    var templateMarkup = $("#SearchViewTemplate").html();
    // var actualTemplate = _.template(templateMarkup);
    // var compiledMarkup = actualTemplate(post.toJSON());

    this.$el.append(templateMarkup);

    this.collection.each(function (flight) {
      // debugger;
      console.log('search view this');
      var fv = new app.FlightView({
        model: flight
      });
      fv.render();
    // A list of all flights
      // ITerate through each one
        // Pass a single flight and render a FlightListView
    });
  }
});
