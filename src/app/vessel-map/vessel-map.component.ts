import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Style, Icon } from 'ol/style';
import { VesselService } from '../vessel.service';

@Component({
  selector: 'app-vessel-map',
  templateUrl: './vessel-map.component.html',
  styleUrls: ['./vessel-map.component.scss']
})


export class VesselMapComponent implements OnInit {
  map!: Map;
  vessels!: any[];

  constructor(private vesselService: VesselService) { }

  ngOnInit() {
    this.initMap();
    this.loadVessels();
  }

  initMap() {
    // Créez une source de tuiles OpenStreetMap (OSM)
    const osmSource = new OSM();
  
    // Créez une couche de tuiles avec la source OSM
    const osmLayer = new TileLayer({
      source: osmSource
    });
  
    // Créez une vue pour la carte
    const view = new View({
      center: [0, 0], // Coordonnées du centre de la carte (ajustez selon vos besoins)
      zoom: 2 // Niveau de zoom initial (ajustez selon vos besoins)
    });
  
    // Créez la carte OpenLayers
    this.map = new Map({
      target: 'map', // ID de l'élément HTML du conteneur de la carte
      layers: [osmLayer],
      view: view
    });
  }
  



  loadVessels() {
    this.vessels = this.vesselService.getVessels();
    // Créez une source de vecteurs
    const vectorSource = new VectorSource();

    // Parcourez les "vessels" et ajoutez un marqueur pour chaque "vessel" à la source de vecteurs
    this.vessels.forEach(vessel => {
      const coordinates = fromLonLat([vessel.longitude, vessel.latitude]);
      const marker = new Feature({
        geometry: new Point(coordinates)
      });
      vectorSource.addFeature(marker);
    });

    // Créez une couche de vecteurs pour afficher les marqueurs sur la carte
    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        image: new Icon({
          src: 'https://openlayers.org/en/latest/examples/data/icon.png',
          scale: 0.1 // Ajustez l'échelle selon vos besoins
        })
      })
    });

    // Ajoutez la couche de vecteurs à la carte
    this.map.addLayer(vectorLayer);
  }
}

