import Restaurant from "../models/restaurant";

export default abstract class RestaurantListAddable {
  abstract addRestaurantList(restaurant: Restaurant): void;
}
