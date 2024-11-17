import {atom} from "recoil";
import { recoilPersist } from 'recoil-persist';

// 목록 보기 모드 로컬스토리지에 저장되게 하려고 했는데 실패했다.
export const defaultValue = true;

const localStorage = typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'isGridView',
  storage: localStorage,
  converter: JSON,
});

export const isGridViewAtom = atom<boolean>({
  key: "isGridViewAtom",
  default: defaultValue,
  effects_UNSTABLE: [persistAtom],
});