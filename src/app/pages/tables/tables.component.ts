import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  searchForm:FormGroup;  
  constructor(
    private fb: FormBuilder
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
    console.log(data)

    // this.comproService.listRuc(dataLogin).subscribe((rest: any) => {
    //   console.log(rest)
    // }, error => {
    //   console.log(error)
    //   alert(error.error.Message);
    // })
  }
}
