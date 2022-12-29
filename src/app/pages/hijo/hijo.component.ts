import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
/*   name:string = 'Dave' */
  @Input() name: string = 'Dave'
  @Output() namecambiado = new EventEmitter<string>();

  changeNameHijo(){
    this.name = 'El Barbaro'
    this.namecambiado.emit(this.name);
  }
}
