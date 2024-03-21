import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OccupancyState, SectionData } from './occupancy.models';

export const selectOccupancyState = createFeatureSelector<OccupancyState>('occupancy');
export const selectOccupancyData = createSelector(
    selectOccupancyState,
    (state: OccupancyState) => state.data
);

export const selectOccupancyError = createSelector(
    selectOccupancyState,
    (state: OccupancyState) => state.error
);

export const selectOccupancyStatus = createSelector(
    selectOccupancyState,
    (state: OccupancyState) => state.status
);

export const selectFetchTime = createSelector(
    selectOccupancyState,
    (state: OccupancyState) => state.fetch_time
);


export const selectTotalCurrentOccupancy = createSelector(
    selectOccupancyData,
    (sections: SectionData[]): number | undefined => {
      const section1 = sections.find(s => s.section_id === 1);
      return section1 ? section1.current_occupancy_percentage : undefined;
    }
  );

export const selectOccupancyDataBySectionId = (sectionId: number, day: number = new Date().getDay()) => createSelector(
    selectOccupancyData,
    (data: SectionData[]): SectionData | undefined => {
        const section = data.find((section: SectionData) => section.section_id === sectionId);

        if (section && section.occupancy && Array.isArray(section.occupancy[day])) {
            const modifiedSection: SectionData = { ...section, occupancy: [section.occupancy[day]] };
            return modifiedSection;
        }
        return section;
    }
);

export const selectCurrentOccupancyPercentageBySectionId = (sectionId: number) => createSelector(
    selectOccupancyData,
    (sections: SectionData[]): number | undefined => {
        const section = sections.find(s => s.section_id === sectionId);
        return section ? section.current_occupancy_percentage : undefined;
    }
);

