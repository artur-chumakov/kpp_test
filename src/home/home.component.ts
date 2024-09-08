import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isMenuOpen: boolean = false;
  toggleMenu(): void{
    this.isMenuOpen = !this.isMenuOpen;
    console.log("isMenuOpen = " + this.isMenuOpen);
  }
}
