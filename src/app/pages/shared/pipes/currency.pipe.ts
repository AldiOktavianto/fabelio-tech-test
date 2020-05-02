import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

	transform(value: any): any {
		const val = (typeof value === 'number') ? value.toFixed(0) : value;

		if (!isNaN(parseFloat(val))) {
			return `${'Rp'} ${parseFloat(val).toLocaleString('in-ID')}`;
		}
	}

}
