export interface HourData {
    time: string;
    occupancy_percentage: number;
}

export interface SectionData {
    section_id: number;
    description: string;
    hours: HourData[];
}

export interface OccupancyState {
    data: SectionData[];
    fetch_time: string;
    error: any;
    status: any;
}