import { Component, OnInit } from '@angular/core';
import { VesselService } from '../vessel.service';

@Component({
  selector: 'app-vessel-list',
  templateUrl: './vessel-list.component.html',
  styleUrls: ['./vessel-list.component.scss']
})
export class VesselListComponent implements OnInit {
  vessels: any[] = [];

  constructor(private vesselService: VesselService) {}

  ngOnInit() {
    this.vessels = this.vesselService.getVessels();
    console.log('Données des "vessels" depuis le service :', this.vessels);
  }
}
