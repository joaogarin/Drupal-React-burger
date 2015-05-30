/** @jsx React.DOM */
(function ($) {
  'use strict';

  Drupal.behaviors.reactburger = {
    attach: function (context, settings) {

      //Burger component
      var salad = settings.reactburger.salad,
        meat = settings.reactburger.meat,
        sauce = settings.reactburger.sauce;

      var Burger = React.createClass({displayName: "Burger",
        render: function() {
          return (
            React.createElement("div", {className: "burger"}, 
              React.createElement("h4", {className: "sauce"}, 
          this.props.sauce
              ), 
              React.createElement("h4", {className: "meat"}, 
          this.props.meat
              ), 
              React.createElement("h4", {className: "salad"}, 
          this.props.salad
              )
            )
          );
        }
      });

      React.render(
        React.createElement(Burger, {sauce: sauce, meat: meat, salad: salad}),
        document.getElementById('burger_content')
      );

    }
  };


})(jQuery);
