import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OccupancyState } from './occupancy.models';
import { OccupancyDataItem } from './occupancy.models';

export const selectOccupancyFeature = createFeatureSelector<OccupancyState>('occupancy');

export const selectOccupancyData = createSelector(
    selectOccupancyFeature,
    (state: OccupancyState) => state.data
);

export const selectOccupancyError = createSelector(
    selectOccupancyFeature,
    (state: OccupancyState) => state.error
);

export const selectOccupancyStatus = createSelector(
    selectOccupancyFeature,
    (state: OccupancyState) => state.status
);

export const selectOccupancyDataBySectionId = (sectionId: number) => createSelector(
    selectOccupancyData,
    (data: OccupancyDataItem[]) => data.find(item => item.section_id === sectionId)
);