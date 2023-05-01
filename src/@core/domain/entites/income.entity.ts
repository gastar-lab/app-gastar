type Input = {
  id: string;
  description: string;
  value: number;
  date: Date;
  paymentMethod: string;
  bankId: string;
  location: string;
};
export class Income {
  constructor(input: Input) {
    //  TODO: validate input
  }
}
