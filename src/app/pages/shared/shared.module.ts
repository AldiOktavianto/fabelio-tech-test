import { NgModule } from '@angular/core';

// pipe
import { CurrencyPipe } from './pipes/currency.pipe';

@NgModule({
    exports: [
        CurrencyPipe
    ],
    declarations: [
        CurrencyPipe
    ]
})
export class SharedModule { }
