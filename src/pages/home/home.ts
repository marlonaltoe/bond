import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandidatoPage } from '../candidato/candidato';
import { BondProvider } from '../../providers/bond/bond';
import { NgModel, FormBuilder, Validators, FormGroup } from '@angular/forms';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    BondProvider //inclusao do provider na pagina para usar a API
  ]
})
export class HomePage {

  login: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public formBuilder: FormBuilder,
              public api: BondProvider) {
  }

  ngOnInit(){
    this.login = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  efetuarLogin(frm: FormGroup) {

    return this.api.post('access',this.login).then(
        data => {
          console.log(data);
        }
      )
  }

  efetuarCadastro():void{
    this.navCtrl.push('CadastroPage');
  }

}
