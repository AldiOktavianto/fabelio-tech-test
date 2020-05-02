export class ProductModel {
    name: string;
    description: string;
    furnitureStyle: string[];
    deliveryTime: string;
    price: number

    constructor() {
        this.name = '';
        this.description = '';
        this.furnitureStyle = new Array<string>();
        this.deliveryTime = '';
        this.price = 0;
    }
}