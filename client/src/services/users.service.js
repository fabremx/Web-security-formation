import { Subject } from "rxjs";
import usersApi from "../api/users.api";

const subject = new Subject();

const parseCookie = (str) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

export const usersService = {
  initUser: async () => {
    if (!document.cookie || !parseCookie(document.cookie).sid) return subject.next(undefined);

    const response = await usersApi.getUserInfo();
    if (!response.ok) return subject.next(undefined);

    subject.next(response.user);
  },
  setUser: async () => {
    const response = await usersApi.getUserInfo();
    if (!response.ok) return subject.next(undefined);

    subject.next(response.user);
  },
  clearUser: () => subject.next(undefined),
  getUser: () => subject.asObservable(),
};
