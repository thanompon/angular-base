import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductCategoryComponent } from "./product-category/product-category.component";
import { LeftSideBarComponent } from "./left-side-bar/left-side-bar.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const route = [
  { path: "", component: HomepageComponent },
  { path: "product-category", component: ProductCategoryComponent },
  { path: "product-list", component: ProductListComponent },
  { path: "homepage", component: HomepageComponent },
  { path: "dashboard", component: DashboardComponent }
];

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(route)],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductCategoryComponent,
    LeftSideBarComponent,
    HomepageComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
