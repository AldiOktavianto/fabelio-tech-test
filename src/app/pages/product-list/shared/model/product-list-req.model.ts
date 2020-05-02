import { ProductModel } from './product.model';

export class ProductListReqModel {
    furnitureStyles: string[];
    products: ProductModel[];

    constructor() {
        this.furnitureStyles = new Array<string>();
        this.products = new Array<ProductModel>();
    }
}