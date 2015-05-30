/*
 * @file
 *
 * React burger component
 */

(function ($) {

  'use strict';

  Drupal.behaviors.reactburger = {
    attach: function (context, settings) {

      //Burger component
      var salad = settings.reactburger.salad,
        meat = settings.reactburger.meat,
        sauce = settings.reactburger.sauce;

      var Burger = React.createClass({displayName: "Burger",
        getInitialState: function() {
          return {data: {
            'salad': salad,
            'meat': meat,
            'sauce': sauce
          }};
        },
        handleIngredientSubmit: function (IngredientsData) {

          var ingredient = IngredientsData.ingredient;

          var BurgerIngredients = this.state.data;

          this.setState({data: BurgerIngredients});

        },
        render: function () {

          return (
            React.createElement("div", {className: "burger"}, 
              React.createElement("h4", {className: "sauce"}, 
          this.state.data.sauce
              ), 
              React.createElement("h4", {className: "meat"}, 
          this.state.data.meat
              ), 
              React.createElement("h4", {className: "salad"}, 
          this.state.data.salad
              ), 
              React.createElement(IngredientForm, {onIngredientSubmit: this.handleIngredientSubmit})
            )
          );
        }
      });

      var IngredientForm = React.createClass({displayName: "IngredientForm",
        handleSubmit: function(e) {
          e.preventDefault();
          var ingredient = React.findDOMNode(this.refs.ingredient).value.trim();
          if (!ingredient) {
            return;
          }
          //submit the callback to Burger with the necessary ingredient
          this.props.onIngredientSubmit({ingredient: ingredient});
          React.findDOMNode(this.refs.ingredient).value = '';
          return;
        },
        render: function () {
          return (
            React.createElement("form", {className: "ingredientForm", onSubmit: this.handleSubmit}, 
              React.createElement("input", {type: "text", placeholder: "Your ingredient", ref: "ingredient"}), 
              React.createElement("input", {type: "submit", value: "add ingredient"})
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
