type Input = {
  id: string;
  description: string;
  value: number;
  date: Date;
  categoryId: string;
  paymentMethod: string;
  bankId: string;
  location: string;
};
export class Expense {
  constructor(input: Input) {
    //  TODO: validate input
  }
}
