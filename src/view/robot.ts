import readline from "readline-sync";
import { RestaurantListBloc } from "../bloc/restaurant_list_bloc";
import UserDataGettable from "../behaviors/user_input_gettable";

export default class Robot implements UserDataGettable {
  name: string;
  clientName: string;
  restaurantListBloc: RestaurantListBloc;

  constructor(name: string, restaurantListBloc: RestaurantListBloc) {
    this.name = name;
    this.clientName = "";
    this.restaurantListBloc = restaurantListBloc;
  }

  greeting() {
    this.clientName = this.getUserInput(
      "こんにちは、私は" + this.name + "です。あなたの名前はなんですか？"
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

  getUserInput(prompt: string): string {
    return readline.question(prompt);
  }
}
