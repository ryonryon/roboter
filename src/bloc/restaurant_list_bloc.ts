import RestaurantListShowable from "../behaviors/restaurant_list_showable";
import Restaurant from "../models/restaurant";

export class RestaurantListBloc {
  constructor(private restaurantListShowable: RestaurantListShowable) {}

  restaurants(): Restaurant[] {
    return this.restaurantListShowable.showRestaurantList();
  }
}

export default class RestaurantListBlocFactory {
  constructor(public restaurantListShowable: RestaurantListShowable) {
    this._restaurantListShowable = restaurantListShowable;
  }

  private _restaurantListShowable: RestaurantListShowable;

  create(): RestaurantListBloc {
    return new RestaurantListBloc(this._restaurantListShowable);
  }
}
