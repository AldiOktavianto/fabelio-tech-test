import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// dto
import { ProductListReqDTO } from '../dto';

// model
import { ProductListReqModel } from '../model';

// mapper
import { ProductListReqMapper } from '../mapper';

@Injectable({
	providedIn: 'root'
})
export class ProductListService {

	constructor(
		private http: HttpClient,
		private productListReqMapper: ProductListReqMapper
	) { }

	public getProductList(): Observable<ProductListReqModel> {
		const url = 'http://www.mocky.io/v2/5c9105cb330000112b649af8​,';

		return this.http.get(url)
			.pipe(
				map((resp: ProductListReqDTO): ProductListReqModel => {
					return this.productListReqMapper.mappingDTOToModel(resp as ProductListReqDTO);
				})
			)
	}
}
