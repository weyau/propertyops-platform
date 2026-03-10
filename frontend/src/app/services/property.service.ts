import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private readonly api = 'http://localhost:3000/property';
  private readonly http = inject(HttpClient);

  getProperties() {
    return this.http.get(this.api);
  }

  createProperty(property: any) {
    return this.http.post(this.api, property);
  }
}