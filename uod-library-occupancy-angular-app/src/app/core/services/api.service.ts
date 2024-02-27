import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OccupancyState, SectionData } from 'src/app/store/occupancy.models';
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    getOccupancyData(): Observable<SectionData[]> {
        return this.http.get<SectionData[]>('https://uod.davidtopping.dev/api/occupancy').pipe(
            catchError(error => {
                console.error('Error fetching occupancy data:', error);
                return throwError(error);
            })
        );
    }
}
