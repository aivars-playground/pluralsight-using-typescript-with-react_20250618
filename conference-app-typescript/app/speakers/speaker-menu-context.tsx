"use client";

import React, { createContext, ReactNode, useState } from "react";

export const SpeakerMenuContext = createContext<{
  speakingSaturday: boolean;
  setSpeakingSaturday: React.Dispatch<React.SetStateAction<boolean>>;
  speakingSunday: boolean;
  setSpeakingSunday: React.Dispatch<React.SetStateAction<boolean>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}>({
  speakingSaturday: true,
  setSpeakingSaturday: () => {},
  speakingSunday: true,
  setSpeakingSunday: () => {},
  searchText: "",
  setSearchText: () => {},
});

export const SpeakerMenuProvider = ({ children }: { children: ReactNode }) => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);
  const [searchText, setSearchText] = useState("");
  const value = {
    speakingSaturday,
    setSpeakingSaturday,
    speakingSunday,
    setSpeakingSunday,
    searchText,
    setSearchText,
  };
  return (
    <SpeakerMenuContext.Provider value={value}>
      {children}
    </SpeakerMenuContext.Provider>
  );
};
