import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.page.html',
  styleUrls: ['./mensaje.page.scss'],
})
export class MensajePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  irHome() {
    this.router.navigate(['/home']);
  }

}
