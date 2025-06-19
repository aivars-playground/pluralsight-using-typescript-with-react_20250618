"use client";
import React, { createContext, useState } from "react";

type SpeakerMenuContextProps = {
  speakingSaturday: boolean
  setSpeakingSaturday: React.Dispatch<React.SetStateAction<boolean>>
  speakingSunday: boolean
  setSpeakingSunday: React.Dispatch<React.SetStateAction<boolean>>
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
}

export const SpeakerMenuContext = createContext<SpeakerMenuContextProps>({
  speakingSaturday: true,
  setSpeakingSaturday: () => {},
  speakingSunday: true,
  setSpeakingSunday: () => {},
  searchText: "",
  setSearchText: () => {},
});


type SpeakerMenuProviderProps = {
  children: React.ReactNode
}

export const SpeakerMenuProvider = ({ children }: SpeakerMenuProviderProps) => {
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
