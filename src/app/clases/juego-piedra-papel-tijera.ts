import { Juego } from '../clases/juego';
import { Jugador } from './jugador';

export class JuegoPiedraPapelTijera extends Juego {


  constructor(nombre?: string, gano?: boolean, jugador?: Jugador) {
    super('Piedra Papel o Tijera', gano, jugador);
  }

  public verificar(): boolean {
    return true;
  }

}
