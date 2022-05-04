import axios from "axios";
import { User } from "./type";

const URL = `https://jsonplaceholder.typicode.com/users`;

export const getUsers = (): Promise<User[] | void> => {
  return axios.get(URL)
    .then((response) => {
      return response.data
    })
    .catch ((error) => {
      console.error(error)
    })
}