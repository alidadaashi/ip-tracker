import { Component } from '@angular/core';
import * as Leaflet from 'leaflet';
Leaflet.Icon.Default.imagePath = 'assets/images/';
const myIcon = Leaflet.icon({
  iconUrl: 'assets/images/icon-location.svg',
  iconSize: [46, 56],
  // iconAnchor: [16, 32],
  popupAnchor: [0, -32],
  // shadowUrl: 'path/to/custom-icon-shadow.svg',
  // shadowSize: [41, 41],
  shadowAnchor: [12, 41]
});

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 16,
    center: { lat: 28.626137, lng: 79.821603 }
  }

  initMarkers() {
    const initialMarker = {
        position: { lat: 28.625485, lng: 79.821091 },
      };

      const marker = this.generateMarker(initialMarker);
      marker.addTo(this.map).bindPopup(`<b>${initialMarker.position.lat},  ${initialMarker.position.lng}</b>`);
      this.map.panTo(initialMarker.position);
      this.markers.push(marker)
    
  }

  generateMarker(data: any) {
    return Leaflet.marker(data.position, { draggable: true, icon:myIcon })
      .on('click', (event) => this.markerClicked(event))
      .on('dragend', (event) => this.markerDragEnd(event));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initMarkers();
  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerDragEnd($event: any) {
    console.log($event.target.getLatLng());
  } 
}