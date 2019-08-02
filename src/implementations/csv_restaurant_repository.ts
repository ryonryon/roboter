import fs from "fs";
import RestaurantListWritable from "../behaviors/restaurant_list_writable";
import RestaurantListGettable from "../behaviors/restaurant_list_gettable";
import RestaurantListShowable from "../behaviors/restaurant_list_showable";
import RestaurantListAddable from "../behaviors/restaurant_list_addable";
import Restaurant from "../models/restaurant";

export default class CsvRestaurantRepository
  implements
    RestaurantListGettable,
    RestaurantListShowable,
    RestaurantListWritable,
    RestaurantListAddable {
  constructor(public url: string) {
    this._url = url;
    this._restaurantList = this.getRestaurantList();
  }

  private _url: string;
  public _restaurantList: Restaurant[];

  getRestaurantList(): Restaurant[] {
    if (!this.isFileExist(this._url)) {
      return [];
    }
    let content = fs.readFileSync(this._url, "utf-8");
    let restaurants = content.split("\n").map(function(line) {
      return new Restaurant(line);
    });

    return restaurants;
  }

  showRestaurantList(): Restaurant[] {
    return this._restaurantList;
  }

  writeRestaurantList(): void {
    if (!this.isFileExist(this._url)) {
    }

    let data: string = "";
    this._restaurantList.forEach(restaurant => {
      data += restaurant.name + "," + restaurant.voteCount + "\n";
    });

    fs.writeFileSync(this._url, data, "utf-8");
  }

  addRestaurantList(restaurant: Restaurant): void {
    this._restaurantList.push(restaurant);
  }

  private isFileExist(url: string): boolean {
    let isExist = false;

    try {
      fs.statSync(url);
      isExist = true;
    } catch (err) {
      isExist = false;
    }
    return isExist;
  }
}
