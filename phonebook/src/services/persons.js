import axios from "axios";

const baseURL = "http://localhost:3001/persons";
const getAll = () => {
  const request = axios.get(baseURL);
  return request.then((res) => res.data);
};

const create = (newPerson) => {
  const request = axios.post(baseURL, newPerson);
  return request.then((res) => res.data);
};

const remove = (id) => {
  const request = axios.delete(`${baseURL}/${id}`);
  return request.then((res) => res.data);
};

const update = (id, changedPerson) => {
  const request = axios.put(`${baseURL}/${id}`, changedPerson);
  return request.then((res) => res.data);
};

const personService = { getAll, create, remove, update };

export default personService;
