import fs from "fs";
import RestaurantListShowable from "../behaviors/restaurant_list_showable";
import Restaurant from "../models/restaurant";

export default class CsvRestaurantRepository implements RestaurantListShowable {
  constructor(public url: string) {
    this._url = url;
  }

  public _url: string;

  showRestaurantList(): Restaurant[] {
    if (!this.isFileExist(this._url)) {
      return [];
    }
    let content = fs.readFileSync(this._url, "utf-8");
    let restaurantList = content.split("\n").map(function(line) {
      return new Restaurant(line);
    });

    return restaurantList;
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
