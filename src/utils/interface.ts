export interface User {
  name: string;
  email: string;
  phone: string;
  position_id: number;
  id?: string;
  position?: string;
  photo: any;
}

export interface UserRequest {
  users: User[];
  total_pages: number;
}

export interface Positions {
  id: number;
  name: string;
}

export interface PositionsRequest {
  positions: Positions[];
}

export interface UserResponse {
  user_id?: number;
  success: boolean;
  message: string;
}

export interface State {
  error: string;
}

export interface Action {
  type: string;
  payLoad: string;
}