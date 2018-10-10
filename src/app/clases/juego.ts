import { Jugador } from './jugador';

export abstract class Juego {

  // Atributos
  public nombre = 'Sin Nombre';
  public jugador: Jugador;
  public gano = false;

  // Constructor
  constructor(nombre?: string, gano?: boolean, jugador?: Jugador) {
    if (nombre) {
      this.nombre = nombre;
    }
    if (gano) {
      this.gano = gano;
    }
    if (jugador) {
      this.jugador = jugador;
    } else {
      this.jugador = new Jugador();
      this.jugador.nombre = 'Jhon Doe';
    }
  }

  // Metodos abstractos
  public abstract verificar(): boolean;

  // Metodos publicos
  public retornarAyuda() {
    return 'NO hay Ayuda definida';
  }
}
