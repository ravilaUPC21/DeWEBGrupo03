import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm:FormGroup;  

  constructor(
    private fb: FormBuilder, 
    private readonly loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      clave: ['', Validators.required]
    });
  }
  ngOnDestroy() {
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.login(this.loginForm.value);
    } else {
      alert("Formulario no valido");
    }
  }

  login(dataLogin){
    // console.log(dataLogin)
    this.loginService.login(dataLogin).subscribe((rest: any) => {
      // console.log(rest)
      localStorage.setItem('token', rest.token);
      localStorage.setItem('user', rest.usuario.nombreUsuario);
      // sessionStorage.setItem('token', rest.token);
      // sessionStorage.setItem('user', rest.usuario.nombreUsuario);

      this.router.navigateByUrl('/dashboard', { skipLocationChange: false }).then(() => {
        this.router.navigate(['dashboard']);
        // window.location.reload();
      })
    }, error => {
      console.log(error)
      alert(error.error.Message);
    })
  }
}
