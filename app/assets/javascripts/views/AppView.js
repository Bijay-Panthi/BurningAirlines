var app = app || {};

app.AppView = Backbone.View.extend({
  el:'#app',

  initialize: function () {

  },

  render: function () {

    var templateMarkup = $("#AppViewTemplate").html();
    this.$el.html( templateMarkup );

    var sv = new app.SearchView({
      collection: this.collection
    });
    sv.render();

  }
});
