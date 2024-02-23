import { createReducer, on } from '@ngrx/store';
import * as OccupancyActions from './occupancy.actions';
import { OccupancyState } from './occupancy.models'

export const initialState: OccupancyState = {
    data: [],
    error: "null",
    status: 'pending'
}

export const occupancyReducer = createReducer(
    initialState,

    on(OccupancyActions.loadOccupancy, (state) => ({ ...state, status: 'loading' })),

    on(OccupancyActions.loadOccupancySuccess, (state, { data }) => ({
        ...state,
        data: data,
        status: 'success',
        error: null,
    })),
    on(OccupancyActions.loadOccupancyFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error'
    })),
);
