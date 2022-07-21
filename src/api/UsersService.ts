import { PositionsRequest, UserRequest, UserResponse } from "../utils/interface";

const API_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const getUsers = async (pageCount = 1): Promise<UserRequest> => {
  return fetch(`${API_URL}/users?page=${pageCount}&count=6`)
  .then(resresponse => resresponse.json());
};

export const getPositions = async (): Promise<PositionsRequest> => {
  const response = await fetch(`${API_URL}/positions`);

  return response.json();
};

export const getToken = async (): Promise<{ token: string }> => {
  return await fetch(`${API_URL}/token`)
  .then(resresponse => resresponse.json());
}

export const setUser = async ({
  position_id,
  name,
  email,
  phone,
  photo
}) : Promise<UserResponse> => {
  const formData = new FormData();
  formData.append('position_id', position_id); 
  formData.append('name', name); 
  formData.append('email', email); 
  formData.append('phone', phone); 
  formData.append('photo', photo);

  return getToken().then((res) => {
    const { token }: { token: string } = res; 
    return fetch(`${API_URL}/users`, { 
      method: 'POST', 
      body: formData, 
      headers: { 'Token': token, }
    }).then(response => response.json())
  })
}
