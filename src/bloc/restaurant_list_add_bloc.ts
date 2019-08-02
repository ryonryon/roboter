import RestaurantListAddable from "../behaviors/restaurant_list_addable";
import Restaurant from "../models/restaurant";

export class RestaurantListAddBloc {
  constructor(private restaurantListAddable: RestaurantListAddable) {}

  addRestaurant(restaurant: Restaurant): void {
    this.restaurantListAddable.addRestaurantList(restaurant);
  }
}

export default class RestaurantListAddBlocFactory {
  constructor(restaurantListAddable: RestaurantListAddable) {
    this._restaurantListAddable = restaurantListAddable;
  }

  private _restaurantListAddable: RestaurantListAddable;

  create(): RestaurantListAddBloc {
    return new RestaurantListAddBloc(this._restaurantListAddable);
  }
}
