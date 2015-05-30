/** @jsx React.DOM */
(function ($) {
  (function () {
    'use strict';
    // this function is strict...
  }());

  Drupal.behaviors.reactburger = {
    attach: function (context, settings) {

      //Burger component
      var salad = Drupal.settings.reactburger.salad,
        meat = Drupal.settings.reactburger.meat,
        sauce = Drupal.settings.reactburger.sauce;

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
