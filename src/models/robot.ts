import CsvControllable from "../behaviors/csv_controllable";

export default class Robot implements CsvControllable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greeting() {
    console.log("こんにちは、私はRobokoです。あなたの名前はなんですか？");
  }

  askFavoriteRestaurant() {
    console.log("Junさん。ありがとうございました。");
    console.log("良い一日を!さようなら。");
  }

  suggestRestaurant() {
    console.log("私のオススメのレストランは、 Japanes Appleです。");
    console.log("このレストランは好きですか?[Yes/No]");
  }

  isCsvExists(): void {
    throw new Error("Method not implemented.");
  }
  readCsv(): void {
    throw new Error("Method not implemented.");
  }
  writeCsv(): void {
    throw new Error("Method not implemented.");
  }
}
