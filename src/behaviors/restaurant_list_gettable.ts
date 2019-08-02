import Restaurant from "../models/restaurant";

export default abstract class RestaurantListGettable {
  abstract getRestaurantList(): Restaurant[];
}
