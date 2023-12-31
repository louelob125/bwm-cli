import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentals: Rental[] = [];

  constructor(private rentalService: RentalService) {

  }

  ngOnInit(): void {
    const rentalObservable = this.rentalService.getRentals();
  
    rentalObservable.subscribe({
      next: (rentals: Rental[]) => {
        this.rentals = rentals;
      },

      error: (err: any) => {

      },

      complete: () => {

      }
    });
  }
  
}
