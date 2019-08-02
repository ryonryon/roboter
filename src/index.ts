import readline from "readline-sync";
import Robot from "./view/robot";
import CsvRestaurantRepository from "./implementations/csv_restaurant_repository";
import RestaurantListBlocFactory, {
  RestaurantListBloc
} from "./bloc/restaurant_list_bloc";
import RestaurantListAddBlocFactory, {
  RestaurantListAddBloc
} from "./bloc/restaurant_list_add_bloc";
import RestaurantListWriteBlocFactory, {
  RestaurantListWriteBloc
} from "./bloc/restaurant_list_write_bloc";

function main() {
  const csvRestaurantRepository: CsvRestaurantRepository = new CsvRestaurantRepository(
    "./data/restaurant.csv"
  );

  const restaurantListBlocFactory: RestaurantListBlocFactory = new RestaurantListBlocFactory(
    csvRestaurantRepository
  );

  const restaurantListAddBlocFactory: RestaurantListAddBlocFactory = new RestaurantListAddBlocFactory(
    csvRestaurantRepository
  );

  const restaurantListWriteBlocFactory: RestaurantListWriteBlocFactory = new RestaurantListWriteBlocFactory(
    csvRestaurantRepository
  );

  const restaurantListBloc: RestaurantListBloc = restaurantListBlocFactory.create();

  const restaurantListAddBloc: RestaurantListAddBloc = restaurantListAddBlocFactory.create();

  const restaurantListWriteBloc: RestaurantListWriteBloc = restaurantListWriteBlocFactory.create();

  const robot = new Robot(
    "Roboko",
    restaurantListBloc,
    restaurantListAddBloc,
    restaurantListWriteBloc
  );

  startApp(robot);
}

function startApp(robot: Robot) {
  robot.greeting();
  robot.suggestRestaurant();
  robot.askFavoriteRestaurant();
  robot.farewell();
}

main();
