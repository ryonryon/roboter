import readline from "readline-sync";
import Robot from "./view/robot";
import CsvRestaurantRepository from "./implementations/csv_restaurant_repository";
import RestaurantListBlocFactory, {
  RestaurantListBloc
} from "./bloc/restaurant_list_bloc";

function main() {
  const csvRestaurantRepository: CsvRestaurantRepository = new CsvRestaurantRepository(
    "./data/restaurant.csv"
  );

  const restaurantListBlocFactory: RestaurantListBlocFactory = new RestaurantListBlocFactory(
    csvRestaurantRepository
  );

  const restaurantListBloc: RestaurantListBloc = restaurantListBlocFactory.create();
  const robot = new Robot("Roboko", restaurantListBloc);

  robot.greeting();
  robot.clientName = readline.question();

  robot.suggestRestaurant();

  robot.askFavoriteRestaurant();
  robot.farewell();
}

main();
