import React from "react";
import Logo from "../../Logo/Logo";
import styles from "./SideDrawers.module.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";

const sideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <Aux>
      <Backdrop visible={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;