import { GetCharacter } from '../types/characteristic';
import { api } from './instance';

export const characterApi = {
  getCharacter: async (page = 1): Promise<GetCharacter> => {
    const response = await api.get<GetCharacter>(`character?page=${page}`);
    return response.data;
  },
};
