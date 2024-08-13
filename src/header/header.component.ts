import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public selected_lang = 'EN';
  public header_menu_home: string = "HOME";
  public header_menu_news: string = "NEWS";
  public header_menu_contacts: string = "CONTACTS";


  onChange(value: any) {
    this.selected_lang = value.target.value;
    console.log(`language was set to ${this.selected_lang}`)
    if (this.selected_lang === "EN") {
      this.header_menu_home = "HOME";
      this.header_menu_news = "NEWS";
      this.header_menu_contacts = "CONTACTS";
    } else if (this.selected_lang === "UA") {
      this.header_menu_home = "HOLOVNA";
      this.header_menu_news = "NOVYNY";
      this.header_menu_contacts = "KONTAKTY";
    } else if (this.selected_lang === "DE") {
      this.header_menu_home = "HAUPTSEITE";
      this.header_menu_news = "NACHRICHTEN";
      this.header_menu_contacts = "KONTAKTEN";
    }

  }
}
