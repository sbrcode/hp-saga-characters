import http from "../http-common";
import FanData from "../types/FanType";

const getAll = () => {
  return http.get<Array<FanData>>("/");
};

const get = (id: any) => {
  return http.get<FanData>(`/${id}`);
};

const FanService = {
  getAll,
  get,
};

export default FanService;