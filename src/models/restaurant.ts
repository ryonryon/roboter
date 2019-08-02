export default class Restaurant {
  public name: string;
  public voteCount: number;

  constructor(name: string) {
    this.name = name;
    this.voteCount = 1;
  }
}
