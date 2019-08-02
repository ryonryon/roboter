import readline from "readline-sync";
import { RestaurantListBloc } from "../bloc/restaurant_list_bloc";
import { RestaurantListAddBloc } from "../bloc/restaurant_list_add_bloc";
import UserDataGettable from "../behaviors/user_input_gettable";
import Restaurant from "../models/restaurant";
import { RestaurantListWriteBloc } from "../bloc/restaurant_list_write_bloc";

export default class Robot implements UserDataGettable {
  name: string;
  clientName: string;
  restaurantListBloc: RestaurantListBloc;
  restaurantListAddBloc: RestaurantListAddBloc;
  restaurantListWriteBloc: RestaurantListWriteBloc;

  constructor(
    name: string,
    restaurantListBloc: RestaurantListBloc,
    restaurantListAddBloc: RestaurantListAddBloc,
    restaurantListWriteBloc: RestaurantListWriteBloc
  ) {
    this.name = name;
    this.clientName = "";
    this.restaurantListBloc = restaurantListBloc;
    this.restaurantListAddBloc = restaurantListAddBloc;
    this.restaurantListWriteBloc = restaurantListWriteBloc;
  }

  greeting() {
    this.clientName = this.getUserInput(
      "こんにちは、私は" + this.name + "です。あなたの名前はなんですか？"
    );
  }

  suggestRestaurant() {
    this.restaurantListBloc.restaurants().forEach(restaurant => {
      console.log("私のオススメのレストランは、%sです。", restaurant.name);
      this.getUserInput("このレストランは好きですか?[Yes/No]");
    });
  }

  askFavoriteRestaurant() {
    let restaurantName: string = this.getUserInput(
      this.name + "さん。どこのレストランが好きですか?"
    );

    this.restaurantListAddBloc.addRestaurant(new Restaurant(restaurantName));
  }

  farewell() {
    this.restaurantListBloc.restaurants().forEach(restaurant => {
      console.log("%s: %d", restaurant.name, restaurant.voteCount);
    });
    this.restaurantListWriteBloc.writeRestaurantList();
    console.log("%sさん。ありがとうございました。", this.clientName);
    console.log("良い一日を!さようなら。");
  }

  getUserInput(prompt: string): string {
    return readline.question(prompt);
  }
}
