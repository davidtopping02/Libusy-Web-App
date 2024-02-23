import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OccupancyDataItem } from 'src/app/store/occupancy.models';

export interface OccupancyApiResponse {
    // Define the expected properties of your API response here
    occupancyDataItems: OccupancyDataItem[];
}

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }
    getOccupancyData(): Observable<{ data: OccupancyDataItem[] }> {
        return this.http.get<{ data: OccupancyDataItem[] }>('http://35.229.61.99/occupancy').pipe(
            catchError(error => {
                console.error('Error fetching occupancy data:', error);
                return throwError(error);
            })
        );
    }
}
