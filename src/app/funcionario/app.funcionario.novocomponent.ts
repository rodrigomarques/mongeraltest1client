import { Component } from "@angular/core";

import { Funcionarios } from "./Funcionarios";
import { Enderecos } from "./Enderecos";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Component({
	templateUrl: './template/app.funcionario.novocomponent.html'
})
export class AppFuncionarioNovoComponent{
	resp:any = "";
	f:Funcionarios = {
		id : null, nome : null, cpf:null, senha:null, telefone:null, email:null, datanascimento:null, rg:null, 
		dataexpedicao:null, orgao:null, estadocivil:null, categoria:null, empresa:null, profissao:null, rendabruta:null, 
		endereco:null
	};

	e:Enderecos = {
		id:null, cep:null, logradouro:null, numero:null, complemento:null, bairro:null, cidade:null, estado:null,
		clientes_id:null
	};

	constructor(private http:Http){

	}

	buscarCep():void{

		console.log("Cep: "  + this.e.cep);

		this.http.get('http://api.postmon.com.br/v1/cep/' + this.e.cep)
		.toPromise()
		.then((res) => {
			var result = res.json();
			console.log(result);

			this.e.logradouro = result.logradouro;
			this.e.bairro = result.bairro;
			this.e.cidade = result.cidade;
			this.e.estado = result.estado;
		});

	}

	cadastrarFuncionario():void{

		this.f.endereco = this.e;
		console.log(this.f);
		this.http.post('http://localhost:81/mongeral/mongeralproject/public/api/cliente',
		this.f)
		.toPromise()
		.then((res) => {
			var result = res.json();
			console.log(result);
		})
		.catch((err) => {
			console.log("ERRO  " + err);
		});
	}

}
