/* eslint-disable @typescript-eslint/naming-convention */
export interface UpdateUserData {
  username: string;
  nbr_of_children: number;
  relationship_status: string;
  education_feild: string;
  job_title: string;
  work_feild: string;
  yearly_salary: number;
  profile_picture_url?: string;
  latitude?: number;
  longitude?: number;
}
