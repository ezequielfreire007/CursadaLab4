import { Juego } from '../clases/juego';
import { Jugador } from '../clases/jugador';
/**
 * Juego adivina el Numero
 * la amquina genera un numero secreto ramdom entre 0 y 100.
 * El jugador debe adivinar el numero.
 * la maquina le informa si el numero ingresado es mayor o menor al numero secreto.
 */
export class JuegoAdivina extends  Juego {

  public numeroSecreto: number;
  public numeroIngresado: number;
  public gano: boolean;

  constructor(nombre?: string, gano?: boolean, jugador?: Jugador, numeroIngresado?: number, numeroSecreto?: number) {
      super('Adivina el número', gano, jugador);
      this.numeroIngresado = 0;
      this.numeroSecreto = 0;
  }

  public verificar(): boolean {
    if (this.numeroIngresado === this.numeroSecreto) {
      console.log('son iguales');
      this.gano = true;
    }
    if (this.gano) {
      return true;
    } else {
      return false;
    }
  }

  public generarnumero() {
    this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
    console.log('numero Secreto:' + this.numeroSecreto);
    this.gano = false;
  }

  public retornarAyuda() {
    if (this.numeroIngresado < this.numeroSecreto) {
      return 'Falta';
    }
    return 'Te pasate';
  }
}
