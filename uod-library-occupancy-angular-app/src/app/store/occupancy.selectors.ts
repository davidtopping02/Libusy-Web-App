import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OccupancyState, SectionData } from './occupancy.models';

export const selectOccupancyState = createFeatureSelector<OccupancyState>('occupancy');

export const selectOccupancyData = createSelector(
    selectOccupancyState,
    (state): SectionData[] => {
        // Check if state.data is actually an object containing a 'data' property that is an array
        if (typeof state.data === 'object' && 'data' in state.data && Array.isArray(state.data.data)) {
            return state.data.data as SectionData[];
        } else if (Array.isArray(state.data)) {
            return state.data;
        } else {
            // Fallback case, if the data is neither - likely an error or unexpected state shape
            console.error('Unexpected state.data structure:', state.data);
            return [];
        }
    }
);

export const selectOccupancyError = createSelector(
    selectOccupancyState,
    (state: OccupancyState) => state.error
);

export const selectOccupancyStatus = createSelector(
    selectOccupancyState,
    (state: OccupancyState) => state.status
);

export const selectOccupancyDataBySectionId = (sectionId: number) => createSelector(
    selectOccupancyData,
    (data: SectionData[]): SectionData | undefined => {
        return data.find((section: SectionData) => section.section_id === sectionId);
    }
);



export const selectFetchTime = createSelector(
    selectOccupancyState,
    (state: OccupancyState) => state.fetch_time
);
