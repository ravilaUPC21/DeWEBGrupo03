import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComproService } from 'src/app/services/compro.service';

@Component({
  selector: 'app-mis-comprobantes',
  templateUrl: './mis-comprobantes.component.html',
  styleUrls: ['./mis-comprobantes.component.scss']
})
export class MisComprobantesComponent implements OnInit {
  
  comprobantes: [];
  searchForm:FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly comproService: ComproService
  ) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      ruc: ['', [Validators.required]]
    });
  }

  onSearch() {
    if(this.searchForm.valid) {
      this.list(this.searchForm.value);
    } else {
      alert("Formulario no valido");
    }
  }

  list(data){
    const { ruc } = data;
    console.log(ruc)
    this.comproService.listRuc(ruc).subscribe((rest: any) => {
      console.log(rest)
      if(rest.comprobantes.length == 0){
        alert('No se encontro comprobantes');
      }
      this.comprobantes = rest.comprobantes;
    }, error => {
      console.log(error)
      alert(error.error.Message);
    })
  }

}
