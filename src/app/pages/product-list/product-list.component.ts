import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// model
import { ProductListReqModel, ProductModel } from './shared/model';

// service
import { ProductListService } from './shared/service';

var deliveryTimeOpt = [
	{
		label: '1 week',
		value: 7
	},
	{
		label: '2 weeks',
		value: 14
	},
	{
		label: '1 month',
		value: 30
	},
	{
		label: 'More than 1 month',
		value: 0
	}
]

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
	private subscibers: Subscription[];

	public productList: ProductModel[];
	public filteredProductList: ProductModel[];
	public furnitureStyles: string[];
	public deliveryDays: any[];

	public keyword: string;
	public filterStyle: string[];
	public filterDeliveryTime: number[];

	constructor(
		private productListService: ProductListService
	) { }

	ngOnInit() {
		this.subscibers = [];
		this.productList = [];
		this.filteredProductList = [];
		this.furnitureStyles = [];

		this.keyword = '';
		this.filterStyle = [];
		this.filterDeliveryTime = [];

		this.deliveryDays = deliveryTimeOpt;

		this.getProductList();
	}

	ngOnDestroy() {
		this.subscibers.forEach(each => each.unsubscribe());
	}

	private getProductList() {
		const subs = this.productListService.getProductList()
			.subscribe((resp: ProductListReqModel) => {
				this.productList = resp.products;
				this.furnitureStyles = resp.furnitureStyles;

				this.filterProduct();
			});
			
		this.subscibers.push(subs);
	}

	public filterOnChange(value: any, type: string) {
		if(type == 'search')
			this.keyword = value;
		else if(type == 'style')
			this.filterStyle = value;
		else if(type == 'delivery')
			this.filterDeliveryTime = value;

		this.filterProduct();
	}

	private filterProduct() {
		let tempProduct = this.productList;
		let keyword = this.keyword;
		let filterStyle = this.filterStyle;
		let filterDeliveryTime = this.filterDeliveryTime;

		if(keyword !== '' || filterStyle.length > 0 || filterDeliveryTime.length > 0) {
			let temp: any = [];
			temp = Object.keys(tempProduct).reduce((r, index) => {

				if(keyword !== '' && filterStyle.length > 0 && filterDeliveryTime.length > 0) {
					if(this.isIncludeKeyword(tempProduct[index].name, keyword) && this.compareStyle(filterStyle, tempProduct[index].furnitureStyle) && this.compareDelivery(filterDeliveryTime, tempProduct[index].deliveryTime))
						r.push(tempProduct[index]);
				} else if(keyword !== '' && filterStyle.length > 0) {
					if(this.isIncludeKeyword(tempProduct[index].name, keyword) && this.compareStyle(filterStyle, tempProduct[index].furnitureStyle))
						r.push(tempProduct[index]);
				} else if(keyword !== '' && filterDeliveryTime.length > 0) {
					if(this.isIncludeKeyword(tempProduct[index].name, keyword) && this.compareDelivery(filterDeliveryTime, tempProduct[index].deliveryTime))
						r.push(tempProduct[index]);
				} else if(filterStyle.length > 0 && filterDeliveryTime.length > 0) {
					if(this.compareStyle(filterStyle, tempProduct[index].furnitureStyle) && this.compareDelivery(filterDeliveryTime, tempProduct[index].deliveryTime))
						r.push(tempProduct[index]);
				} else if(keyword !== '') {
					if(this.isIncludeKeyword(tempProduct[index].name, keyword))
						r.push(tempProduct[index]);
				} else if(filterStyle.length > 0) {
					if(this.compareStyle(filterStyle, tempProduct[index].furnitureStyle))
						r.push(tempProduct[index]);
				} else if(filterDeliveryTime.length > 0) {
					if(this.compareDelivery(filterDeliveryTime, tempProduct[index].deliveryTime))
						r.push(tempProduct[index]);
				}

				return r;
			}, []);
	
			this.filteredProductList = temp;
		} else {
			this.filteredProductList = this.productList;
		}
	}

	private compareStyle(filterValue: string[], productStyles: string[]) {
		let result = false;
		filterValue.forEach((eachFilter: string) => productStyles.forEach((eachStyle) => {
			if(eachFilter == eachStyle) {
				result = true;
			}
		}));

		return result;
	}

	private compareDelivery(filterValue: number[], productDelivery: number) {
		let result = false;
		filterValue.forEach((eachFilter: number) => {
			if(eachFilter == 0) {
				if(productDelivery > 30)
					result = true;
			} else if(productDelivery <= eachFilter) {
				result = true;
			}
		});

		return result;
	}

	private isIncludeKeyword(name: string, keyword: string) {
		return name.toLowerCase().includes(keyword.toLowerCase())
	}

}
