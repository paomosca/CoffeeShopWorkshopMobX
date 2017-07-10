import { StackNavigator } from "react-navigation";

import ShopListScreen from "../Containers/ShopListScreen";
import { Colors } from "../Themes";
import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    ShopListScreen: {
      screen: ShopListScreen,
      navigationOptions: () => ({
        title: "CoffeeShop"
      })
    }
  },
  {
    // Default config for all screens
    headerMode: "screen",
    navigationOptions: ({ navigation }) => ({
      title:
        navigation.state &&
        navigation.state.params &&
        navigation.state.params.title,
      headerTintColor: Colors.fire,
      headerStyle: styles.header
    })
  }
);

export default PrimaryNav;
