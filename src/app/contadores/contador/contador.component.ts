import { Component } from '@angular/core';

@Component({
    selector : 'app-contador',
    template : `
    <h1>{{titulo}}</h1>

    <h3>Base: {{ base }}</h3>

    <button (click)="acumula(base)">+ {{ base }}</button>
    <span>{{ contador }}</span>
    <button (click)="acumula(-base)">- {{ base }}</button>
    
    `
})
export class ContadorComponent {

    public titulo   : string = 'Contador mondo y lirondo';
    public base     : number = 5;
    public contador : number = 0;

    acumula( valor : number) {
        this.contador += valor;
    }

    

}




