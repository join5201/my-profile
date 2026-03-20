import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Log } from "../types";

interface CheerStore {
  logs: Log[];
  colorCounter: number;
  addLog: (message: string) => void;
}

export const useCheerStore = create<CheerStore>()(
  persist(
    (set, get) => ({
      logs: [],
      colorCounter: 0,
      addLog: (message: string) => {
        const newLog: Log = {
          id: Date.now(),
          message,
          createdAt: new Date(),
          colorIndex: get().colorCounter,
        };
        set((state) => ({
          logs: [newLog, ...state.logs],
          colorCounter: state.colorCounter + 1,
        }));
      },
    }),
    {
      name: "cheer-storage", // localStorage 키 이름
    },
  ),
);
