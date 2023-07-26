"use client";

import { formatter } from "@/libs/utils";
import React, { useEffect, useState } from "react";

interface CurrencyProps {
  value: string | number;
}

export const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};
