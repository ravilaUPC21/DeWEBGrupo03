import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComproService } from 'src/app/services/compro.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  comprobantes: [];
  searchForm:FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly comproService: ComproService
  ) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      date: ['', [Validators.required]]
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
    const {date } = data;
    console.log(date)
    const inpDate = `${ date.month }/${ date.day }/${ date.year }`;
    console.log(inpDate)

    this.comproService.listDate(inpDate).subscribe((rest: any) => {
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
