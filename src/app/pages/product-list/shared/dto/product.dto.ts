export class ProductDTO {
    name: string;
    description: string;
    furniture_style: string[];
    delivery_time: string;
    price: number

    constructor() {
        this.name = '';
        this.description = '';
        this.furniture_style = new Array<string>();
        this.delivery_time = '';
        this.price = 0;
    }
}