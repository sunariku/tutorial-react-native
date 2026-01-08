import api from '../configurations/api';
import { Nilai as Model } from '../models/nilai';

const Nilai = {
  getNilai: () => {
    return api.get<Model[]>('/nilai');
  },
  getNilaiById: (id: number) => {
    return api.get<Model>(`/nilai/${id}`);
  },
  createNilai: (data: Model) => {
    return api.post(`/nilai`, data);
  },
  updateNilai: (id: number, data: Model) => {
    return api.put(`/nilai/${id}`, data);
  },
  deleteNilai: (id: number) => {
    return api.delete(`/nilai/${id}`);
  },
};

export default Nilai;
