export class Jugador {

  id: number;
  public nombre: string;
  public apellido: string;
  public email: string;
  public clave: string;

  constructor (id?: number, nombre?: string, apellido?: string, email?: string, clave?: string) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.clave = clave;
  }

}

