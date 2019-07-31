import CsvControllable from "../behaviors/csv_controllable";

export default class Robot implements CsvControllable {
  name: string;
  clientName: string;

  constructor(name: string) {
    this.name = name;
    this.clientName = "";
  }

  greeting() {
    console.log(
      "こんにちは、私は%sです。あなたの名前はなんですか？",
      this.name
    );
  }

  farewell() {
    console.log("%sさん。ありがとうございました。", this.clientName);
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
