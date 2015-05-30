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
            'salad': Drupal.t(salad),
            'meat': Drupal.t(meat),
            'sauce': Drupal.t(sauce)
          }};
        },
        handleIngredientSubmit: function (IngredientsData) {

          var ingredient = IngredientsData.ingredient,
            ingredientType = IngredientsData.ingredientType;

          var BurgerIngredients = this.state.data;

          switch(ingredientType){
            case 'salad':
              BurgerIngredients.salad = Drupal.t(ingredient);
              break;

            case 'meat':
              BurgerIngredients.meat = Drupal.t(ingredient);
              break;

            case 'sauce':
              BurgerIngredients.sauce = Drupal.t(ingredient);
              break;

          }

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
          var ingredientType = React.findDOMNode(this.refs.ingredientType).value.trim();
          if (!ingredient) {
            return;
          }
          //submit the callback to Burger with the necessary ingredient
          this.props.onIngredientSubmit({
            ingredient: ingredient,
            ingredientType: ingredientType
          });
          React.findDOMNode(this.refs.ingredient).value = '';
          return;
        },
        render: function () {

          return (
            React.createElement("form", {className: "ingredientForm", onSubmit: this.handleSubmit}, 
              React.createElement("h3", null, 
                Drupal.t("Change one Ingredient")
              ), 
              React.createElement("input", {type: "text", placeholder: "Your ingredient", ref: "ingredient"}), 
              React.createElement("select", {ref: "ingredientType"}, 
                React.createElement("option", {value: "salad"}, Drupal.t("Salad")), 
                React.createElement("option", {value: "meat"}, Drupal.t("Meat")), 
                React.createElement("option", {value: "sauce"}, Drupal.t("Sauce"))
              ), 
              React.createElement("input", {type: "submit", value: Drupal.t("Add Ingredient")})
            )
          );
        }
      });

      React.render(
        React.createElement(Burger, null),
        document.getElementById('burger_content')
      );

    }
  };


})(jQuery);
