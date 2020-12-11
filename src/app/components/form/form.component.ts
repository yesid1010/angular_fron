import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona';
import { ApilaravelService } from '../../services/apilaravel.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  persona:Persona = {
    id: 0,
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    direccion: ''
  }
  modoEditar =  false

  
  constructor(private service:ApilaravelService) { }

  ngOnInit(): void {
  }

  addPersona(){ 
    //delete this.persona.id;
    console.log('persona',this.persona);
    this.service.addPerson(this.persona).subscribe(data=>{
      
      this.clear()
    })
  }

  update(){
    this.service.updatePerson(this.persona).subscribe(data => {
     
      this.clear();
      
    })
  }

  clear(){
    this.modoEditar = false;
    this.persona.nombres = '';
    this.persona.apellidos = '';
    this.persona.correo = '';
    this.persona.telefono = '';
    this.persona.direccion = '';
  }

}
