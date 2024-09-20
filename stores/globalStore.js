import { create } from 'zustand';

const useStore = create((set) => ({
	isSceneLoaded: false,
	setSceneToLoaded: () => set(() => ({ isSceneLoaded: true })),
	isTrailerOpen: false,
	openTrailer: () => set(() => ({ isTrailerOpen: true })),
	closeTrailer: () => set(() => ({ isTrailerOpen: false })),
}));

export default useStore;
