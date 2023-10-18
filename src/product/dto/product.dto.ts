//aqui es lo que se va a estar mandando entre el cliente y el servidor
export class CreateProductDTO {
  readonly name: string;
  readonly description: string;
  readonly imageURL: string;
  readonly price: number;
  readonly createdAt: Date;
}
