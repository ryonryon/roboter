import RestaurantCountUppable from "../behaviors/restaurant_count_uppable";

export class RestaurantCountUpBloc {
  constructor(private restaurantCountUppable: RestaurantCountUppable) {}

  countUp(restaurantIndex: number): void {
    this.restaurantCountUppable.countUpRestaurant(restaurantIndex);
  }
}

export default class RestaurantCountUpBlocFactory {
  constructor(restaurantCountUppable: RestaurantCountUppable) {
    this._restaurantCountUppable = restaurantCountUppable;
  }

  private _restaurantCountUppable: RestaurantCountUppable;

  create(): RestaurantCountUpBloc {
    return new RestaurantCountUpBloc(this._restaurantCountUppable);
  }
}
