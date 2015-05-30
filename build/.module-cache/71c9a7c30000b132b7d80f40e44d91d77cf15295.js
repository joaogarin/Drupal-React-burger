/** @jsx React.DOM */
(function ($) {
  'use strict';

  Drupal.behaviors.reactburger = {
    attach: function (context, settings) {
      if (!Drupal.Nodejs.socket) {
        Drupal.Nodejs.connect();
      }
    }
  };


  //Burger component
  var Burger = React.createClass({displayName: "Burger",
    render: function() {
      return (
        React.createElement("div", {className: "burger"}, 
          React.createElement("h2", {className: "sauce"}, 
          this.props.sauce
          ), 
          React.createElement("h2", {className: "meat"}, 
          this.props.meat
          ), 
          React.createElement("h2", {className: "salad"}, 
          this.props.salad
          )
        )
      );
    }
  });

  React.render(
    React.createElement(Burger, {sauce: "yogurt", meat: "veggymeat", salad: "salad"}),
    document.getElementById('burger_content')
  );


})(jQuery);
