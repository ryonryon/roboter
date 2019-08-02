import readline from "readline-sync";
import Restaurant from "../models/restaurant";
import { RestaurantListBloc } from "../bloc/restaurant_list_bloc";

export default class Robot {
  name: string;
  clientName: string;
  restaurantListBloc: RestaurantListBloc;

  constructor(name: string, restaurantListBloc: RestaurantListBloc) {
    this.name = name;
    this.clientName = "";
    this.restaurantListBloc = restaurantListBloc;
  }

  greeting() {
    console.log(
      "こんにちは、私は%sです。あなたの名前はなんですか？",
      this.name
    );
  }

  suggestRestaurant() {
    this.restaurantListBloc.restaurants().forEach(restaurant => {
      console.log("私のオススメのレストランは、%sです。", restaurant.name);
      console.log("このレストランは好きですか?[Yes/No]");
    });
  }

  askFavoriteRestaurant() {
    console.log("%sさん。どこのレストランが好きですか?", this.name);
  }

  farewell() {
    console.log("%sさん。ありがとうございました。", this.clientName);
    console.log("良い一日を!さようなら。");
  }
}
