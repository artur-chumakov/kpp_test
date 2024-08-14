import {Component} from '@angular/core';
import {KeyValuePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

enum Langs {
  de = 'DE',
  en = 'EN',
  ua = 'UA'
}

export class Lang {

  home: string;
  news: string;
  contact: string;

  constructor(home: string, news: string, contact: string) {
    this.home = home;
    this.news = news;
    this.contact = contact;
  }
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    KeyValuePipe,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  _langsMap = new Map()
    .set(Langs.en, new Lang("Home", "News", "Contact"))
    .set(Langs.de, new Lang("HAUPTSEITE", "NACHRICHTEN", "KONTAKTEN"))
    .set(Langs.ua, new Lang("Домашня", "Новини", "Контакти"));

  public selected_lang = Langs.en;
  public header_menu_home: string = this._langsMap.get(Langs.en).home;
  public header_menu_news: string = this._langsMap.get(Langs.en).news;
  public header_menu_contacts: string = this._langsMap.get(Langs.en).contact;

  onChange(value: any) {
    this.selected_lang = value.target.value;
    console.log(`language was set to ${this.selected_lang}`)
    Object.values(Langs).forEach((value) => {
      if (this.selected_lang === value) {
        this.header_menu_home = this._langsMap.get(value).home;
        this.header_menu_news = this._langsMap.get(value).news;
        this.header_menu_contacts = this._langsMap.get(value).contact;
      }
    })
  }

  protected readonly aLangs = Langs;
}
