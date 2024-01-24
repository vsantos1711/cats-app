import { create } from "zustand";

interface UserStore {
  username: string;
  accessToken: string;
  setUserName: (username: string) => void;
  setAccessToken: (token: string) => void;
}

export const userStore = create<UserStore>((set) => ({
  username: "",
  accessToken: "",
  setUserName: (username: string) => set({ username }),
  setAccessToken: (accessToken: string) => set({ accessToken }),
}));
