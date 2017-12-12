import { Component, OnInit } from "@angular/core";


import { Funcionarios } from "./Funcionarios";
import { Enderecos } from "./Enderecos";
import { Http } from '@angular/http';


@Component({
	templateUrl: './template/app.funcionario.listarcomponent.html'
})
export class AppFuncionarioListarComponent implements OnInit{

	lista:Funcionarios[];

	constructor(private http:Http){

	}

	ngOnInit():void{
		console.log("OnInit");
		this.http.get('http://localhost:81/mongeral/mongeralproject/public/api/cliente')
		.toPromise()
		.then((res) => {
			var result = res.json();
			console.log(result);
			//this.lista = JSON.parse(result);
			this.lista = (result);
		})
		.catch((err) => {
			console.log("ERRO  " + err);
		});;
	}

}
