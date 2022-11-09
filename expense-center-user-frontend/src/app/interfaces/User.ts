/* eslint-disable @typescript-eslint/naming-convention */
export interface User {
  id: number;
  username: string;
  email: string;
  gender: string;
  date_of_birth: string;
  profile_picture_url: string;
  nbr_of_children: number;
  relationship_status: string;
  chat_enabled: boolean;
  education_feild: string;
  work_feild: string;
  job_title: string;
  income: number;
  outcome: number;
  yearly_salary: number;
  living_location_id: number;
  token: string;
  location?: {
    id: number;
    latitude: number;
    longitude: number;
  };
  userDetails?: any;
}
