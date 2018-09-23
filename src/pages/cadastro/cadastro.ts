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
      /*this.cadastroForm = formBuilder.group({
        cdusuario: ['19', Validators.required],
        nome: ['', Validators.required],
        senha: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20),
        Validators.required])],
        login: ['', Validators.required],
        nrcpfcnpj: ['', Validators.required],
        confirmeSenha: ['', Validators.required],
        email: ['', Validators.nullValidator],
        tppessoa: ['', Validators.nullValidator],
      });*/
  }


  /*post(): Promise<Object> {
    return new Promise((resolve, reject) => {

      return this.bondProvider.postUser(this.usuario).subscribe(
        (result: any) => {
          resolve(JSON.parse(result));
        },
        err => {

          console.log("HTTP log:", err);
          reject(err);
        });
    });
  }*/

  ngOnInit(){
    this.usuario = {};
  }

  cadastrarUsuario(frm: FormGroup) {
    //console.log(this.cadastroForm.value);
    //let data = this.cadastroForm.value;
    //let teste = JSON.parse(data);

    return this.api.post('usuario',this.usuario).then(
        data => {
          console.log(data);
        }
      )
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');



    /* this.bondProvider.postUser().subscribe(
       (data) => {
         const response = (data as any); //converte data para qualquer coisa
         const objeto_retorno = JSON.parse(response._body); //transforma o texto de retorno em JSON
         console.log(objeto_retorno);
       },
       error => {
         console.log(error);
       }
     );*/

    /*this.bondProvider.postUser().subscribe(
      data => {
        const response = (data as any); //converte data para qualquer coisa
        const objeto_retorno = JSON.parse(response._body); //transforma o texto de retorno em JSON
        console.log(objeto_retorno);
      },
      error => {
        console.log(error);
      }
    );*/


  }

}

