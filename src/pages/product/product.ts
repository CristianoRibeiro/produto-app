import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import {  ProductService } from '../../providers/product-service';
import { ProductModalPage } from '../product-modal/product-modal';


@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {

    products: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private productService: ProductService, public alertCtrl: AlertController,
    public modalCtrl: ModalController) {

      this.findAll();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }



  findAll() {
    this.productService.findAll()
    .then((products: Array<any>) => {
      this.products = products
    },(error)=> {
      console.log('Erro ao Listar Produtos',error);
    });

  }


  removeProduct(product){

    let alert = this.alertCtrl.create({
      title: 'Deletar Categoria',
      subTitle: 'Deseja realmente deletar o produto \'' + product.nome + '\'?',

      buttons: [
        {text: 'Cancelar'},
        {
          text: 'Deletar',
          handler: (data) => {
            this.productService.delete(product.id)
              .then((res) => {
                if(res){
                  this.findAll();
                }
              },(error) => {
                console.log('Erro ao deletar produto', error);
              })
          }
        }
      ]
    });
    alert.present();

  }


  addProduct() {
    let modal = this.modalCtrl.create(ProductModalPage);

    modal.onDidDismiss(()=>{
      this.findAll();
    });

    modal.present(modal);
  }



    updateProduct(product){
      let modal =  this.modalCtrl.create(ProductModalPage, {
        product: Object.assign({},product)
      });
      modal.onDidDismiss(()=>{
        this.findAll();
      });
      modal.present(modal);
    }






}
