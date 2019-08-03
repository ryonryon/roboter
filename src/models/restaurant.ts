export default class Restaurant {
  public name: string;
  public voteCount: number;

  constructor(name: string, voteCount: number) {
    this.name = name;
    this.voteCount = voteCount;
  }
}
