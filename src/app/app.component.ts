import {Component} from '@angular/core';
import {AppService} from './app.service';
import {Tarea} from './tarea';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
//se crea un arreglo en el cual se van a mostrar las variables de las tareas para poder utilizarlo para mostrar los datos
  // en la tabla
  tareaArray: Tarea[] = [
    //se crean objetos para  podere listarlos en la tabla html
    {id: 1, titulo: "correr", minutos: 5},
    {id: 2, titulo: "sacar la basura", minutos: 2},
    {id: 3, titulo: "salir con el perro", minutos: 4},
  ];
  //creo una variable que es una propiedad de la clase para poder tener una variable de tipo tarea y poder llenarla
  //cada que empieza asi cada que la clase emplieza tendra una tarea en blanco
  selectedTarea: Tarea = new Tarea();
// Metodo que me agreagar en la tabla una tarea
  openForEdit(tarea: Tarea) {
    this.selectedTarea = tarea;

  }
//metodo que me permite editar una tarea de la tabla
  addOrEdit() {
    // si el id es igual a cero significa aun no hay ninguno seleccionado siginifica que quiero agregar uno
    if (this.selectedTarea.id === 0) {
      this.selectedTarea.id = this.tareaArray.length + 1;
      this.tareaArray.push(this.selectedTarea);
    }
    //caso contrario que me lo deje como esta
    this.selectedTarea = new Tarea();
  }
//metodo para eliminar una tarea de la tabla
  delete() {
    if (confirm('estas seguro de eliminarlo?')) {
      this.tareaArray = this.tareaArray.filter(x => x != this.selectedTarea);
      this.selectedTarea = new Tarea();
    }
  }

}
