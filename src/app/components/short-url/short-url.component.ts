import { ShortUrlService } from './../../services/short-url.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  nombreUrl: string = '';
  shortUrl: string = '';
  urlAcortada: boolean = false;
  loading: boolean = false;
  textError: string = '';
  errorUrl: boolean = false;

  constructor(private _shortUrlService: ShortUrlService) { }

  ngOnInit(): void { }

  procesarUrl(){
    if (this.nombreUrl === '') {
      this.error('Por favor ingresa una URL ');
      return;
    }

    this.urlAcortada = false;
    this.loading = true;

    setTimeout(() => {
      this.acortarUrl();
    }, 2000);
  }

  acortarUrl(){
    this._shortUrlService.getUrl(this.nombreUrl).subscribe(resp => {
      this.loading = false;
      this.urlAcortada = true;
      this.shortUrl = resp.link;
    }, error => {
      if (error.error.description === 'The value provided is invalid.') {
        this.loading = false;
        this.nombreUrl = '';
        this.error('La URL ingresada es invalida ');
      }
    });
  }

  error(mensaje: string) {
    this.errorUrl = true;
    this.textError = mensaje;
    setTimeout( () => {
      this.errorUrl = false;
    }, 3000)
  }

}
