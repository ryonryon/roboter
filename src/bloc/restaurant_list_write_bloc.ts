import RestaurantListWritable from "../behaviors/restaurant_list_writable";
import Restaurant from "../models/restaurant";

export class RestaurantListWriteBloc {
  constructor(private restaurantListWritable: RestaurantListWritable) {}

  writeRestaurantList(): void {
    this.restaurantListWritable.writeRestaurantList();
  }
}

export default class RestaurantListWriteBlocFactory {
  constructor(restaurantListWritable: RestaurantListWritable) {
    this._restaurantListWritable = restaurantListWritable;
  }

  private _restaurantListWritable: RestaurantListWritable;

  create(): RestaurantListWriteBloc {
    return new RestaurantListWriteBloc(this._restaurantListWritable);
  }
}
