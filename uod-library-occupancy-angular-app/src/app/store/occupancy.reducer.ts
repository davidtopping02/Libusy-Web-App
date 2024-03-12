import { createReducer, on } from '@ngrx/store';
import * as OccupancyActions from './occupancy.actions';
import { OccupancyState } from './occupancy.models';

export const initialState: OccupancyState = {
    data: [],
    fetch_time: "",
    error: null,
    status: 'pending',
}

export const occupancyReducer = createReducer(
    initialState,

    on(OccupancyActions.loadOccupancy, (state) => ({ ...state, status: 'loading' })),

    on(OccupancyActions.loadOccupancySuccess, (state, { occupancyState }) => ({
        ...state,
        ...occupancyState,
        status: 'success',
        error: null,
    })),

    on(OccupancyActions.loadOccupancyFailure, (state, { error }) => ({
        ...state,
        error,
        status: 'error'
    })),
);
