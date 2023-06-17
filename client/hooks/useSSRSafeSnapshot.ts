/* eslint-disable react-hooks/rules-of-hooks */
// hooks/useSSRSafeSnapshot.ts
// 'use client';
import { useSnapshot } from "valtio";
import { useEffect, useState } from "react";

const useSSRSafeSnapshot = (state) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? useSnapshot(state) : {}; // Return an empty object as a default state on the server-side
};

export default useSSRSafeSnapshot;
