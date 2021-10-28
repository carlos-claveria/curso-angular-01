import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
 
  heroes : string[] = ['Goku','Vegeta','Cham-pi-ñon','Batman'];
  heroesBorrados : string[] = []

  borrarHeroe() : void {

    // this.heroes = this.heroes.filter( (x,i) => i > 0 );
    // alternativa
    const x =  this.heroes.shift();

    x && this.heroesBorrados.push( x );


  }

}
