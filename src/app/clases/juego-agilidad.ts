import { Juego } from '../clases/juego';
import { Jugador } from '../clases/jugador';

export class JuegoAgilidad extends Juego {
  numero1 = 0;
  numero2: any;
  numeroIngresado: number;
  resultado: number;

  constructor(numeroIngresado?: number, gano?: boolean, jugador?: Jugador) {
    super('Agilidad mental', gano, jugador);
    this.numeroIngresado = numeroIngresado;
    // this.numero1 = ;
    // this.numero2 = numero2 !== 0 ? numero2 : 'numero distinto de cero';
  }

  seleccionarOperacion(operacion) {
    switch (operacion) {
      case '+':
        this.resultado = this.operacionSuma();
        this.verificar();
        break;
      case '-':
        this.resultado = this.operacionResta();
        this.verificar();
        break;
      case '/':
        this.resultado =  this.operacionDivision();
        this.verificar();
        break;
      case '*':
        this.resultado = this.operacionMultiplacar();
        this.verificar();
        break;
      default:
        break;
    }
  }

  operacionSuma() {
    return this.numero1 + this.numero2;
  }

  operacionResta() {
    return this.numero1 - this.numero2;
  }

  operacionMultiplacar() {
    return this.numero1 * this.numero2;
  }

  operacionDivision() {
    return this.numero1 / this.numero2;
  }

  public verificar() {
    if (this.numeroIngresado === this.resultado) {
      this.gano = true;
    }
    if (this.gano) {
      return true;
    } else {
      return false;
    }
 }

}
