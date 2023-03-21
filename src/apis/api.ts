import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import BASE_URL from '@/constants/api';

interface FruitsType {
  id: string;
  name: string;
}

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getFruits = async () => {
  return await instance.get('/fruits').then(res => res.data);
};

export const useGetFruits = () => {
  return useQuery<FruitsType[]>(['fruits'], () => getFruits());
};
