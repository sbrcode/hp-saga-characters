import http from "../http-common";
import CharData from "../types/CharType";

const getAll = () => {
  return http.get<Array<CharData>>("/");
};

const CharService = {
  getAll,
};

export default CharService;