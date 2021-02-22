import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burgers/OrderSummary/OrderSummary";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burgers/Burger";
import BuildControls from "../../components/Burgers/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.2,
  bacon: 0.9,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    ingredients: {
      salad: 1,
      bacon: 0,
      cheese: 1,
      meat: 2,
    },
    totalPrice: 3.3,
    purchase: false,
    purchaseMode: false,
  };

  addIngredient = (type) => {
    // Get Old Count of Ingredient Type
    const oldCount = this.state.ingredients[type];

    // Increment the # of that Ingredient
    const updatedCount = oldCount + 1;

    // Don't want to mutate state, so use spread to operator
    // to get a shallow copy of the Ingredients
    const updatedIngredients = { ...this.state.ingredients };

    // Update the Ingredient with its new Count
    updatedIngredients[type] = updatedCount;

    // Get Old Price of your Burger Ingredients
    const oldPrice = this.state.totalPrice;

    // Get the Price of your Ingredient your Adding
    const priceAdditon = INGREDIENT_PRICES[type];

    // Update the Price of your Burger
    const newPrice = oldPrice + priceAdditon;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  };
  removeIngredient = (type) => {
    //Get Old Count of Ingredient Type
    const oldCount = this.state.ingredients[type];

    // Decrement the Count

    let newCount;
    if (oldCount > 0) {
      newCount = oldCount - 1;
    } else {
      newCount = 0;
    }

    // Get Shallow Copy of Ingredients
    const newIngredients = { ...this.state.ingredients };

    // Update the Ingredient Count
    newIngredients[type] = newCount;

    // Update the Price
    let oldPrice = this.state.totalPrice;
    let priceDeduction = INGREDIENT_PRICES[type];

    let updatedPrice;
    if (oldPrice - priceDeduction >= 0) {
      updatedPrice = oldPrice - priceDeduction;
    } else {
      updatedPrice = oldPrice;
    }

    // Update Ingredients
    this.setState({
      ingredients: newIngredients,
      totalPrice: updatedPrice,
    });
    this.updatePurchaseState(newIngredients);
  };

  updatePurchaseState(newIngredients) {
    const sum = Object.keys(newIngredients)
      .map((igKey) => {
        return newIngredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchase: sum > 0 });
    console.log(this.state.purchase);
    console.log(`sum: ${sum}`);
  }

  purchaseHandler = () => {
    this.setState({
      purchaseMode: true,
    });
  };
  render() {
    const disableInfo = {
      ...this.state.ingredients,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal visible={this.state.purchaseMode}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredient}
          ingredientRemoved={this.removeIngredient}
          disabled={disableInfo}
          purchaseable={this.state.purchase}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
