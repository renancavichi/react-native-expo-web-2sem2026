import { create } from 'zustand'

export const useProfileStore = create((set) => ({
  name: '',
  avatar: '',
  setProfile: (name, avatar) => set({ name, avatar }),
}))