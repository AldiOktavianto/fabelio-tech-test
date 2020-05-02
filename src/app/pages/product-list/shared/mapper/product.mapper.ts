import { Injectable } from '@angular/core';

import { ProductDTO } from '../dto';
import { ProductModel } from '../model';

@Injectable({
    providedIn: 'root'
})

export class ProductMapper {
    
    constructor() {}

    private mappingDTOToModel( dto: ProductDTO ): ProductModel {
        if (dto) {
            const model = new ProductModel();

            model.name = dto.name;
            model.description = dto.description;
            model.furnitureStyle = dto.furniture_style;
            model.deliveryTime = dto.delivery_time;
            model.price = dto.price;

            return model;
        } else {
            console.error('ProductMapper : Cannot mapping empty data');

            return null;
        }
    }

    public mappingDTOsToModels( dtos: ProductDTO[] ): ProductModel[] {
        if (dtos) {
            const models = dtos
                .reduce((result, each) => {
                    result.push(this.mappingDTOToModel(each));

                    return result;
                }, []);
            
            return models;
        } else {
            console.error('ProductMapper : Cannot mapping empty data');

            return null;
        }
    }
}