import { create } from "zustand";

type State = {
  config: {
    baseMap: {} | null;
    thematicMap:  null;
  };
};

type Actions = {
  updateConfig: (config: Partial<State["config"]>) => void;
};

export const useMapConfig = create<State & Actions>((set, get) => ({
  config: {
    baseMap: {},
    thematicMap: null,
  },
  updateConfig: (config: Partial<State["config"]>) => {
    set({
      config: {
        ...get().config,
        ...config,
      },
    });
  },
}));
