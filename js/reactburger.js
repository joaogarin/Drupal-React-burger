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

      var Burger = React.createClass({
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
            <div className="burger">
              <h4 className="sauce">
          {this.state.data.sauce}
              </h4>
              <h4 className="meat">
          {this.state.data.meat}
              </h4>
              <h4 className="salad">
          {this.state.data.salad}
              </h4>
              <IngredientForm onIngredientSubmit={this.handleIngredientSubmit} />
            </div>
          );
        }
      });

      var IngredientForm = React.createClass({
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
            <form className="ingredientForm" onSubmit={this.handleSubmit}>
              <h3>
                {Drupal.t("Change one Ingredient")}
              </h3>
              <input type="text" placeholder="Your ingredient" ref="ingredient" />
              <select ref="ingredientType">
                <option value="salad">{Drupal.t("Salad")}</option>
                <option value="meat">{Drupal.t("Meat")}</option>
                <option value="sauce">{Drupal.t("Sauce")}</option>
              </select>
              <input type="submit" value={Drupal.t("Add Ingredient")} />
            </form>
          );
        }
      });

      React.render(
        <Burger />,
        document.getElementById('burger_content')
      );

    }
  };


})(jQuery);
