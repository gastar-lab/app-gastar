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
  id: string;
  description: string;
  value: number;
  date: Date;
  categoryId: string;
  paymentMethod: string;
  bankId: string;
  location: string;
  constructor(input: Input) {
    this.id = input.id;
    this.description = input.description;
    this.value = input.value;
    this.date = input.date;
    this.categoryId = input.categoryId;
    this.paymentMethod = input.paymentMethod;
    this.bankId = input.bankId;
    this.location = input.location;
  }
}
