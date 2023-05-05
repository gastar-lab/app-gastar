type Input = {
  id: string;
  name: string;
};
export class Category {
  id: string;
  name: string;
  constructor(input: Input) {
    this.id = input.id;
    this.name = input.name;
    //  TODO: validate input
  }
}
