import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import {  CategoryService } from '../../providers/category-service';

@Component({
  selector: 'page-category-modal',
  templateUrl: 'category-modal.html',
  providers:[CategoryService]
})
export class CategoryModalPage {

  category:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController,
  private categoryService: CategoryService) {

    this.category = navParams.get('category') || {};

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryModalPage');
  }

  dismiss() {
   this.viewCtrl.dismiss();
  }


  save(){
    if(this.category.id != undefined){

      this.categoryService.update(this.category)
      .then((res)=> {
        if(res){
          this.viewCtrl.dismiss();
        }
      },(error) => {
        console.log("Erro ao atualizar Categoria",error);
      });


    }else{
      this.categoryService.insert(this.category)
      .then((res)=> {
        if(res){
          this.viewCtrl.dismiss();
        }
      },(error) => {
        console.log("Erro ao cadastrar Categoria",error);
      });


    }

  }


}
