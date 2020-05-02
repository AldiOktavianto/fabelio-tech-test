import { Injectable } from '@angular/core';

import { ProductListReqDTO } from '../dto';
import { ProductListReqModel } from '../model';

import { ProductMapper } from './product.mapper';

@Injectable({
    providedIn: 'root'
})

export class ProductListReqMapper {
    
    constructor(
        private productMapper: ProductMapper
    ) {}

    public mappingDTOToModel( dto: ProductListReqDTO ): ProductListReqModel {
        if (dto) {
            const model = new ProductListReqModel();

            model.furnitureStyles = dto.furniture_styles;
            model.products = this.productMapper.mappingDTOsToModels(dto.products);

            return model;
        } else {
            console.error('ProductListReqMapper : Cannot mapping empty data');

            return null;
        }
    }
}