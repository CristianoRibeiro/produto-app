import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import {  CategoryService } from '../../providers/category-service';
import { CategoryModalPage } from '../category-modal/category-modal';


@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  categories: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private categoryService: CategoryService, public alertCtrl: AlertController,
    public modalCtrl: ModalController) {

    this.findAll();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  findAll() {
    this.categoryService.findAll()
    .then((categories: Array<any>) => {
      this.categories = categories
    },(error)=> {
      console.log('Erro ao Listar categoria',error);
    });

  }


  removeCategory(category){

    let alert = this.alertCtrl.create({
      title: 'Deletar Categoria',
      subTitle: 'Deseja realmente deletar a categoia \'' + category.nome + '\'?',

      buttons: [
        {text: 'Cancelar'},
        {
          text: 'Deletar',
          handler: (data) => {
            this.categoryService.delete(category.id)
              .then((res) => {
                if(res){
                  this.findAll();
                }
              },(error) => {
                console.log('Erro ao deletar categoria', error);
              })
          }
        }
      ]
    });
    alert.present();

  }


  addCategory() {
    let modal = this.modalCtrl.create(CategoryModalPage);

    modal.onDidDismiss(()=>{
      this.findAll();
    });

    modal.present(modal);
  }



    updateCategory(category){
      let modal =  this.modalCtrl.create(CategoryModalPage, {
        category: category
      });
      modal.onDidDismiss(()=>{
        this.findAll();
      });
      modal.present(modal);
    }




}
