import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {  ProductService } from '../../providers/product-service';
import {  CategoryService } from '../../providers/category-service';
/*
  Generated class for the ProductModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-modal',
  templateUrl: 'product-modal.html',
  providers: [CategoryService, ProductService]
})
export class ProductModalPage {

  product: any;
  categories: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController,
    private productService: ProductService, private categoryService: CategoryService) {
    this.product = navParams.get('product') || {};

    this.categoryService.findAll()
      .then((categories: Array<any>) => {
          this.categories = categories;
      }, (error) =>{
        this.categories = [];
        console.log('Erro ao buscar categoria', error);
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductModalPage');
  }

  dismiss() {
   this.viewCtrl.dismiss();
  }



  save() {
    if(this.product.id != undefined){

      this.productService.update(this.product)
      .then((res)=> {
        if(res) {
        this.viewCtrl.dismiss();
      }

    }, (error) => {
      console.log('Erro ao atualizar produto', error);
    });

    }else{

      this.productService.insert(this.product)
      .then((res)=> {
        if(res) {
        this.viewCtrl.dismiss();
      }

    }, (error) => {
      console.log('Erro ao cadastrar produto', error);
    });

    }
  }

}
