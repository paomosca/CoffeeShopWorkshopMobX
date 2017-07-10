import navigationStore from "./NavigationStore";
import CoffeeStore from "./CoffeeStore";

export default {
  navigationStore,
  shopStore: new CoffeeStore()
  // place for other stores...
};
