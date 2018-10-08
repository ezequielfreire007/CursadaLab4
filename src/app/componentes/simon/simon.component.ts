import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';


@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.css'],
  animations: [
    trigger('sliderVerde', [
      state('inactive', style( {
        backgroundColor: 'green',
        color: 'black',
        borderColor: 'green'
       })),
      state('active', style({
        backgroundColor: '#33a763',
        color: 'white',
        borderColor: 'white'
       })),
    ]),
    trigger('sliderAmarillo', [
      state('inactive', style( {
        backgroundColor: 'yellow',
        color: 'black',
        borderColor: 'yellow'
       })),
      state('active', style({
        backgroundColor: '#dac123',
        color: 'white',
        borderColor: 'white'
       })),
    ]),
    trigger('sliderAzul', [
      state('inactive', style( {
        backgroundColor: 'blue',
        color: 'black',
        borderColor: 'blue'
       })),
      state('active', style({
        backgroundColor: 'rgb(107, 142, 206)',
        color: 'white',
        borderColor: 'white'
       })),
    ]),
    trigger('sliderRojo', [
      state('inactive', style( {
        backgroundColor: 'red',
        color: 'black',
        borderColor: 'red'
       })),
      state('active', style({
        backgroundColor: 'rgb(216, 51, 51)',
        color: 'white',
        borderColor: 'white'
       })),
    ])
  ]
})
export class SimonComponent implements OnInit {

  niveles: number;
  nivelActual: number;
  teclas = [];
  time: number;

  // Atributos de estado
  statusVerde: 'active' | 'inactive' = 'inactive';
  statusAmarillo: 'active' | 'inactive' = 'inactive';
  statusRojo: 'active' | 'inactive' = 'inactive';
  statusAzul: 'active' | 'inactive' = 'inactive';

  teclaPre: number;

  constructor() {
    this.niveles = 5;
    this.nivelActual = 0;
    this.teclas = this.generarTeclas(this.niveles);
    this.teclaPre = 0;
    this.time = 0;
    setTimeout(() => { this.siguenteNivel(0); }, 3000);
  }

  ngOnInit() {

    console.log(`${this.teclas}`);

  }

  // Metodos de iluminacion de teclas
  toggleVerde() {
    setTimeout(() => { this.statusVerde = 'inactive'; }, 1000);
    this.statusVerde  = 'active';
  }

  toggle1Amarillo() {
    setTimeout(() => { this.statusAmarillo = 'inactive'; }, 1000);
    this.statusAmarillo  = 'active';
  }

  toggleAzul() {
    setTimeout(() => { this.statusAzul = 'inactive'; }, 1000);
    this.statusAzul  = 'active';
  }

  toggleRojo() {
    setTimeout(() => { this.statusRojo = 'inactive'; }, 1000);
    this.statusRojo  = 'active';
  }


  public siguenteNivel(nivelActual) {

    // Me aseguro si gano
    console.log('Ingreso a niveles');
    if (nivelActual === this.niveles) {
      return alert('Ganaste');
    }

    this.nivelActual += 1;
    console.log(`nivel actual:${this.nivelActual}`);

    for (let i = 0; i < this.nivelActual; i++) {
      console.log(`Tecla del bucle: ${this.teclas[i]}`);
      switch (this.teclas[i]) {
        case 84:
          // this.toggleVerde();
          setTimeout(() => { this.toggleVerde(); }, 2000 * (i + 1) + 1000);
        break;
        case 70:
        // this.toggle1Amarillo();
        setTimeout(() => { this.toggle1Amarillo(); }, 2000 * (i + 1) + 1000);
        break;
        case 86:
        // this.toggleAzul();
        setTimeout(() => { this.toggleAzul(); }, 2000 * (i + 1) + 1000);
        break;
        case 71:
        // this.toggleRojo();
        setTimeout(() => { this.toggleRojo(); }, 2000 * (i + 1) + 1000);
        break;
        default:
          break;
      }
    }

    for (let i = 0; i < this.nivelActual; i++) {
      if (this.teclaPre === this.teclas[i]) {
        // aca veo si preciono bien la tecla
        console.log('bien');
      } else {
        // caso contrario pierde y vuelve a empezar
        console.log('jugar otra vez');
      }
    }

    // Repite la secuencia
        // let i = 0;
        // let teclaActual: number = this.teclas[i];
        // window.addEventListener('keydown', onkeydown);

        // function onkeydown(ev) {
        //   console.log(typeof(ev.keyCode));
        //   console.log(typeof(teclaActual));
        //   console.log(ev.keyCode);
        //   console.log(teclaActual);

        //   if (ev.keyCode === teclaActual) {


        //     switch (ev.keyCode) {
        //       case 84:
        //         // this.toggleVerde();
        //         console.log('tocaste 84 verde');
        //         setTimeout(() => { this.toggleVerde(); }, 1000 * (i + 1) + 1000);
        //       break;

        //       case 70:
        //       console.log('tocaste 70 amarillo');
        //       // this.toggle1Amarillo();
        //       setTimeout(() => { this.toggle1Amarillo(); }, 1000 * (i + 1) + 1000);
        //       break;

        //       case 86:
        //       console.log('tocaste 86 azul');
        //       // this.toggleAzul();
        //       setTimeout(() => { this.toggleAzul(); }, 1000 * (i + 1) + 1000);
        //       break;

        //       case 71:
        //       console.log('tocaste 71 rojo');
        //       // this.toggleRojo();
        //       setTimeout(() => { this.toggleRojo(); }, 1000 * (i + 1) + 1000);
        //       break;

        //       default:
        //         break;
        //     }


        //     console.log(`Tecla precionada:${ev.keyCode}`);
        //     i++;

        //     if (i > nivelActual) {
        //       window.removeEventListener('keydown', onkeydown);
        //       //
        //       setTimeout(() => this.siguenteNivel(i), 1000);
        //     }
        //     console.log(`Tecla array fin:${this.teclas[i]}`);
        //     // teclaActual = this.teclas[i];
        //     console.log(`Tecla actual fin:${teclaActual}`);


        //   } else {

        //     window.removeEventListener('keydown', onkeydown);
        //     alert('Perdiste');
        //   }
        // }
    // this.userSecuencia();

  }

  // userSecuencia() {
  //   let i = 0;
  //   let teclaActual = this.teclas[i];

  //   if (this.teclaActual === teclaActual) { // Cambi teclaActual por teclaPre

  //     i++;
  //     if (i > this.nivelActual) {
  //       alert('Pasa al siguiente nivel');
  //       // this.nivelActual += 1;
  //       setTimeout(() => { this.siguenteNivel(i); }, 3000);
  //     }
  //     teclaActual = this.teclas[i];

  //   } else {
  //     alert('Perdiste');
  //     this.nivelActual = 0;
  //     this.teclas = this.generarTeclas(this.niveles);
  //     this.teclaActual = 0;
  //     this.time = 0;
  //     setTimeout(() => { this.siguenteNivel(0); }, 3000);
  //   }

  // }

  // Que tecla toco
  click(color) {
    console.log(color);
    // let i = 1;
    // let teclaActual: any = this.teclas[i];
    switch (color) {
      case 'verde':
        this.toggleVerde();
        this.teclaPre = 84;
        break;

      case 'amarillo':
        this.toggle1Amarillo();
        this.teclaPre = 70;
        break;

      case 'azul':
        this.toggleAzul();
        this.teclaPre = 86;
        break;

      case 'rojo':
        this.toggleRojo();
        this.teclaPre = 71;
        break;

      default:
        break;
    }
  }

  generarTeclas(niveles) {
    return new Array(niveles).fill(0).map(this.generarTeclaAleatoria);
  }

  generarTeclaAleatoria() {
    const min = 1;
    const max = 4;
    const teclas = [84, 70, 71, 86];
    // return Math.round(Math.random() * (max - min) + min);
    return teclas[Math.floor(Math.random() * teclas.length)];
  }

  // activate(keyCode, opts) {
  //   const el = this.getElementByKeyCode(keyCode);
  //   el.classList.add('active');
  //   if (opts.success) {
  //     el.classList.add('success');
  //   } else if (opts.fail) {
  //     el.classList.add('fail');
  //   }
  //   setTimeout(() => this.deactivate(el), 500);
  // }

  // deactivate(el) {
  //   el.className = 'key';
  // }

  // getElementByKeyCode(keyCode) {
  //   return document.querySelector(`[data-key="${keyCode}"]`);
  // }

}
