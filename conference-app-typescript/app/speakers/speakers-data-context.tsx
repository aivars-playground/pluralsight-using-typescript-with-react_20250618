"use client";
import React, { createContext, ReactNode, useState } from "react";
import {Speaker, speakerSchema} from "@/app/types/speaker";

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

  let initialDataParsed;
  try {
    initialDataParsed = speakerSchema.array().parse(initialData);
  } catch (err : unknown) {
    throw new Error("Invalid initial data" + (err instanceof Error ? err.message : ""));
  }

  const [speakerList, setSpeakerList] = useState<Speaker[]>(initialDataParsed);

  async function updateSpeaker(updatedSpeaker: Speaker) {

    let validatedSpeaker;
    try {
      validatedSpeaker = speakerSchema.parse(updatedSpeaker);
    } catch (err : unknown) {
      throw new Error("Invalid speaker data" + (err instanceof Error ? err.message : ""));
    }

    // Immediately update the local list (optimistic)
    const index = speakerList.findIndex((s) => s.id === updatedSpeaker.id);
    if (index !== -1) {
      const updatedList = [...speakerList];
      updatedList[index] = validatedSpeaker;
      setSpeakerList(updatedList);
    }
  }

  return (
    <SpeakersDataContext.Provider value={{ speakerList, updateSpeaker }}>
      {children}
    </SpeakersDataContext.Provider>
  );
}
