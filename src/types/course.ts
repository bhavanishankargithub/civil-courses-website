import type { ScheduleDetail } from "../data/schedule";

export interface Course {
  id: string;
  title: string;
  description: string;
  full_description: string;
  image_url: string;
  duration: string;
  level: string;
  strikedPrice: number;
  price: number;
  topics: string[];
  created_at: string;
  schedule?: ScheduleDetail[];
}
