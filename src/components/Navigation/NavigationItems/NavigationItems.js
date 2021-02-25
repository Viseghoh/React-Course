import React from "react";
import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="https://google.com" active={true}>
        Burger Builder
      </NavigationItem>
      <NavigationItem>Checkout</NavigationItem>
    </ul>
  );
};

export default navigationItems;
