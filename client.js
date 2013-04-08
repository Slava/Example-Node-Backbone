var dateModel = Backbone.Model.extend({
    url: "http://localhost:1337/",
    initialize: function(){
        this.fetch();
    },
    defaults: {
                  timestamp: "hz"
              }
});

var dateView = Backbone.View.extend({
    el: $("#main"),

    initialize: function() {
        this.model.bind("change", this.render, this);
        return this.render();
    },

    render: function(){
                this.$el.html(_.template("time = <%= timestamp %>", this.model.toJSON()));
                return this;
            }
});

model = new dateModel;
view = new dateView({model: model});
setInterval(function(){ model.fetch(); }, 500);
