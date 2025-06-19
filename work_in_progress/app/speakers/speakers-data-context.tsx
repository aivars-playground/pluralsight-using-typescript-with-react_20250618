"use client";
import React, {createContext, ReactNode, useState} from "react";
import {Speaker} from "@/app/types/Speaker";

export const SpeakersDataContext = createContext<{
  speakerList: Speaker[];
  updateSpeaker: (updatedSpeaker: Speaker) => Promise<void>;
}>({
  speakerList: [],
  updateSpeaker: async () => {},
});

export function SpeakersDataProvider({
                                       children,
                                       initialData,
                                     }: {
  children: ReactNode;
  initialData: Speaker[];
}) {
  const [speakerList, setSpeakerList] = useState(initialData);

  async function updateSpeaker(updatedSpeaker: Speaker) {
    const index = speakerList.findIndex((s) => s.id === updatedSpeaker.id);
    if (index !== -1) {
      const updatedList = [...speakerList];
      updatedList[index] = updatedSpeaker;
      setSpeakerList(updatedList);
    }
  }
  return (
    <SpeakersDataContext.Provider value={{ speakerList, updateSpeaker }}>
      {children}
    </SpeakersDataContext.Provider>
  );
}
