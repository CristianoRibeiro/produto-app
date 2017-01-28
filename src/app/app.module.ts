import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{ ProductPage } from '../pages/product/product';
import{ CategoryPage } from '../pages/category/category';
import { CategoryModalPage } from '../pages/category-modal/category-modal';
import { ProductModalPage } from '../pages/product-modal/product-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductPage,
    CategoryPage,
    CategoryModalPage,
    ProductModalPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductPage,
    CategoryPage,
    CategoryModalPage,
    ProductModalPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
