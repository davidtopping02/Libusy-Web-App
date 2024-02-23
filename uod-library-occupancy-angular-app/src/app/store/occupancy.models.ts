export interface OccupancyDataItem {
    section_id: number;
    description: string;
    current_occupancy: number;
    total_occupancy: number;
    occupancy_percentage: number;
}

export interface OccupancyState {
    data: any;
    error: any;
    status: any;
}