import { FlightsService } from '@services/flights.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-search-result-list',
  templateUrl: './flight-search-result-list.component.html',
  styleUrls: ['./flight-search-result-list.component.scss'],
})
export class FlightSearchResultListComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  itemsToDispaly = 0;

  constructor(private flightsService: FlightsService) { }

  ngOnInit() {
    this.itemsToDispaly = 4;
  }

  isAllResults() {
    return this.flightsService.filteredTrips.length < this.itemsToDispaly;
  }

  loadMoreResults() {
    this.itemsToDispaly += 3;
  }
}
