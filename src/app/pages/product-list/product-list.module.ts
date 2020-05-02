import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// component
import { ProductListComponent } from './product-list.component';

// material
import { 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatButtonModule } from '@angular/material';


// routes
import { ProductListRoutes } from './routes';

@NgModule({
    imports: [
        MatFormFieldModule, 
        MatInputModule, 
        MatSelectModule, 
        MatButtonModule,
        ProductListRoutes,
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        ProductListComponent
    ]
})

export class ProductListModule { }