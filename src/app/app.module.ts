import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//module
import { ProductListModule } from './pages/product-list/product-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// component
import { AppComponent } from './app.component';

// routes
import { AppRoutes } from './routes';

@NgModule({
	imports: [
		AppRoutes,
		ProductListModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule
	],
	declarations: [
		AppComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
