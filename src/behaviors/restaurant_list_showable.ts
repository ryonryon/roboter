import Restaurant from "../models/restaurant";

export default abstract class RestaurantListShowable {
  abstract showRestaurantList(): Restaurant[];
}
