import { atom } from 'recoil';

export type Header = {
  "access-token": string | null;
  "client": string | null;
  "uid": string | null;
}

export const tokenState = atom<Header>({
  key: 'tokenState',
  default: {
    "access-token": localStorage.getItem('access-token') || null,
    "client": localStorage.getItem('client') || null,
    "uid": localStorage.getItem('uid') || null,
  }
});