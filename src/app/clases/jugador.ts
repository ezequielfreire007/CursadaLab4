export class Jugador {

  id: number;
  nombre: string;
  apellido: string;
  email: string;
  clave: string;

  constructor ( nombre, apellido, email, clave, id?: number) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.clave = clave;
  }

}

