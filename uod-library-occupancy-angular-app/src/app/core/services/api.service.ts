import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OccupancyState } from 'src/app/store/occupancy.models';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'https://uod.davidtopping.dev/api/occupancy';

    constructor(private http: HttpClient) { }

    getOccupancyData(): Observable<OccupancyState> {
        return this.http.get<OccupancyState>(this.apiUrl).pipe(
            catchError(error => {
                console.error('Error fetching occupancy data:', error);
                return throwError(error);
            })
        );
    }
}
