import fs from "fs";
import RestaurantListWritable from "../behaviors/restaurant_list_writable";
import RestaurantListGettable from "../behaviors/restaurant_list_gettable";
import RestaurantListShowable from "../behaviors/restaurant_list_showable";
import RestaurantListAddable from "../behaviors/restaurant_list_addable";
import RestaurantCountUppable from "../behaviors/restaurant_count_uppable";
import Restaurant from "../models/restaurant";

export default class CsvRestaurantRepository
  implements
    RestaurantListGettable,
    RestaurantListShowable,
    RestaurantListWritable,
    RestaurantListAddable,
    RestaurantCountUppable {
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
      let restaurantInfo = line.split(",");
      return new Restaurant(restaurantInfo[0], Number(restaurantInfo[1]));
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
    for (let i = 0; i < this._restaurantList.length; i++) {
      data +=
        i + 1 == this._restaurantList.length
          ? this._restaurantList[i].name +
            "," +
            this._restaurantList[i].voteCount
          : this._restaurantList[i].name +
            "," +
            this._restaurantList[i].voteCount +
            "\n";
    }

    fs.writeFileSync(this._url, data, "utf-8");
  }

  addRestaurantList(restaurant: Restaurant): void {
    this._restaurantList.push(restaurant);
  }

  countUpRestaurant(restaurantIndex: number): void {
    this._restaurantList[restaurantIndex].voteCount += 1;
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
