import {useEffect, useState} from "react";
import {defaultValue, isGridViewAtom} from "@/atoms";
import {useRecoilState} from "recoil";

export function useSSR() {
  const [isInitial, setIsInitial] = useState(true);
  const [value, setValue] = useRecoilState(isGridViewAtom);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [isInitial ? defaultValue : value, setValue] as const;
}