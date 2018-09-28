import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BondProvider } from '../../providers/bond/bond';
import { NgModel, FormBuilder, Validators, FormGroup } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
  providers: [
    BondProvider //inclusao do provider na pagina para usar a API
  ]
})
export class CadastroPage {

  cadastroForm: FormGroup;
  usuario: any;

  constructor(public navCtrl: NavController
            , public navParams: NavParams
            , private bondProvider: BondProvider
            , public formBuilder: FormBuilder
            , public api: BondProvider) {

  }


  ngOnInit(){
    this.usuario = {};
  }

  cadastrarUsuario(frm: FormGroup) {

    return this.api.post('usuario',this.usuario).then(
        data => {
          console.log(data);
        }
      )
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');

  }

}

