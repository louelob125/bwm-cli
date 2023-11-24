import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Rental } from "./rental.model";


@Injectable()
export class RentalService {

  private rentals: Rental[] = [{
    id: "1",
    title: "Central Apartment",
    city: "New York",
    street: "Time Square",
    category: "Apartment",
    image: "https://thicc-af.mywaifulist.moe/waifus/perona-one-piece/fADI8SMktRP0U2JXHjLWJW08ud5xgQUsxHy8582v.jpg?class=thumbnail",
    bedrooms: 3,
    description: "Very nice Apartment",
    dailyRate: 34,
    shared: false,
    createdAt: "22/11/2023"
  },
  {
    id: "2",
    title: "Central Apartment 2",
    city: "San Francisco",
    street: "Main street",
    category: "condo",
    image: "https://lh3.googleusercontent.com/NB3yk47eYP5qBjtrelhONpUWM9aRTj9req99aqx8Y3xFgUtDnGTkUwTKavLzpyjyHt_kTRVcm7NAM3ZM_GQer1AzUdRnf2X7s5ffasuOIGgyo5PH4sk4bRdllMhT69orssC1XILPoN0esuyPptBb780",
    bedrooms: 2,
    description: "Not so nice apartment",
    dailyRate: 12,
    shared: true,
    createdAt: "24/12/2017"
  },
  {
    id: "3",
    title: "Central Apartment 3",
    city: "Bratislava",
    street: "Hlavna",
    category: "condo",
    image: "https://media.licdn.com/dms/image/C5603AQG-x-OFerfqPA/profile-displayphoto-shrink_800_800/0/1619237511914?e=2147483647&v=beta&t=SgWYjCDkTCcU-jXXC1soLxlSbWcMv9gMjFicCD6wywI",
    bedrooms: 2,
    description: "POGI YARN apartment",
    dailyRate: 334,
    shared: true,
    createdAt: "24/12/2017"
  },
  {
    id: "4",
    title: "Central Apartment 4",
    city: "Berlin",
    street: "Haupt strasse",
    category: "house",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 9,
    description: "ala lang",
    dailyRate: 33,
    shared: true,
    createdAt: "24/12/2017"
  }];

  public getRentalById(rentalId: string): Observable<Rental> {
    return new Observable<Rental>((observer) => {
      setTimeout(() => {
        const foundRental = this.rentals.find((rental) => {
          return rental.id == rentalId;
        });

        observer.next(foundRental);
      }, 500);
    })
  }

  public getRentals(): Observable<Rental[]> {
    return new Observable<Rental[]>((observer) => {

      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);

    });

  }

}