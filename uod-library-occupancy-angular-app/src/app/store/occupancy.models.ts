export interface HourData {
    time: string;
    occupancy_percentage: number;
}

export interface SectionData {
    section_id: number;
    description: string;
    total_occupancy: number;
    current_occupancy_percentage: number;
    occupancy?: HourData[][];
}

export interface OccupancyState {
    data: SectionData[];
    fetch_time: string;
    error?: any;
    status?: any;
}
