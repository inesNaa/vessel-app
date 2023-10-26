import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VesselService {
  getVessels() {

    return [
      { name: 'Vessel 1', imo: '123456', mmsi: '789012', latitude: 40.7128, longitude: -74.0060 },
      { name: 'Vessel 2', imo: '654321', mmsi: '210987', latitude: 51.5074, longitude: -0.1278 }
   
    ];
  }
}
