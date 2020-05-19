import { Component } from '@angular/core';

import { ViewChild, ElementRef } from '@angular/core';

/* Variavel que faz a biblioteca do Google operar */
/* Biblioteca script do index.html */
declare var google:any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  /* Variável do mapa */
  map:any;

  /* @ViewChild Pega o elemento mapa da home.page.html e coloca elementos filhos dentro dela */
  /* 'mapRef' faz referência ao '#map' da home.page.html */
  @ViewChild('map', {read: ElementRef, static:false}) mapRef:ElementRef;

  constructor() {}

  /* Método que mostra o mapa */
  public showMap() {
    /* Variável que guarda a localização */
    /* Latitude e Longitude */
    const location = new google.maps.LatLng(-22.461780, -48.566028)

    /* Ajuste do mapa */
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }

    /* Declarando que o mapa seré exibido de acordo com o 'mapRef' e 'options' */
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  /* Chamando o método */
  /* A função shoowMap() só funciona depois que o HTML está pronto */
  ionViewDidEnter() {
    this.showMap();
  }
}
