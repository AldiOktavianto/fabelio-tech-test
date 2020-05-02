import { ProductDTO } from './product.dto';

export class ProductListReqDTO {
    furniture_styles: string[];
    products: ProductDTO[];

    constructor() {
        this.furniture_styles = new Array<string>();
        this.products = new Array<ProductDTO>();
    }
}