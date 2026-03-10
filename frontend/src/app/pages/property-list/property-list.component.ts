import { Component, inject, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-property-list',
  imports: [],
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  readonly propertyService = inject(PropertyService);

  properties: any[] = [];

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe((properties) => {
      this.properties = properties as any[];
    });
  }

}
