import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { ProductDetailPageComponent } from './page/product-detail-page/product-detail-page.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { AdminProductComponent } from './page/admin/admin-product/admin-product.component';
import { AdminProductAddComponent } from './page/admin/admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './page/admin/admin-product-edit/admin-product-edit.component';
import { BaseNavComponent } from './components/base-nav/base-nav.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    AdminLayoutComponent,
    HomePageComponent,
    DashboardComponent,
    ProductPageComponent,
    ProductDetailPageComponent,
    PageNotFoundComponent,
    AdminProductComponent,
    AdminProductAddComponent,
    AdminProductEditComponent,
    BaseNavComponent,
    AdminNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
