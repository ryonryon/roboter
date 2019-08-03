import readline from "readline-sync";
import { RestaurantListBloc } from "../bloc/restaurant_list_bloc";
import { RestaurantListAddBloc } from "../bloc/restaurant_list_add_bloc";
import UserDataGettable from "../behaviors/user_input_gettable";
import Restaurant from "../models/restaurant";
import { RestaurantListWriteBloc } from "../bloc/restaurant_list_write_bloc";
import { RestaurantCountUpBloc } from "../bloc/restaurant_count_up_bloc";

export default class Robot implements UserDataGettable {
  name: string;
  clientName: string;
  restaurantListBloc: RestaurantListBloc;
  restaurantListAddBloc: RestaurantListAddBloc;
  restaurantListWriteBloc: RestaurantListWriteBloc;
  restaurantCountUpBloc: RestaurantCountUpBloc;

  constructor(
    name: string,
    restaurantListBloc: RestaurantListBloc,
    restaurantListAddBloc: RestaurantListAddBloc,
    restaurantListWriteBloc: RestaurantListWriteBloc,
    restaurantCountUpBloc: RestaurantCountUpBloc
  ) {
    this.name = name;
    this.clientName = "";
    this.restaurantListBloc = restaurantListBloc;
    this.restaurantListAddBloc = restaurantListAddBloc;
    this.restaurantListWriteBloc = restaurantListWriteBloc;
    this.restaurantCountUpBloc = restaurantCountUpBloc;
  }

  greeting() {
    this.clientName = this.getUserInput(
      "こんにちは、私は" + this.name + "です。あなたの名前はなんですか？"
    );
  }

  suggestRestaurant() {
    let restaurants = this.restaurantListBloc.restaurants();
    for (let i = 0; i < restaurants.length; i++) {
      console.log("私のオススメのレストランは、%sです。", restaurants[i].name);

      while (true) {
        let userInput = this.getUserInput(
          "このレストランは好きですか?[Yes/No]"
        );
        if (
          userInput.toLowerCase() == "yes" ||
          userInput.toLowerCase() == "y"
        ) {
          this.restaurantCountUpBloc.countUp(i);
          break;
        } else if (
          userInput.toLowerCase() == "no" ||
          userInput.toLowerCase() == "n"
        ) {
          break;
        }
      }
    }
  }

  askFavoriteRestaurant() {
    let restaurantName: string = this.getUserInput(
      this.clientName + "さん。どこのレストランが好きですか?"
    );

    this.restaurantListAddBloc.addRestaurant(new Restaurant(restaurantName, 1));
  }

  farewell() {
    this.restaurantListWriteBloc.writeRestaurantList();
    console.log("%sさん。ありがとうございました。", this.clientName);
    console.log("良い一日を!さようなら。");
  }

  getUserInput(prompt: string): string {
    return readline.question(prompt);
  }
}
