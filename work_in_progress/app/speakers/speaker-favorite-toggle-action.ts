"use server";
import { updateSpeakerInCache } from "@/speakers-cache-service";
import {Speaker} from "@/app/types/Speaker";

export async function speakerFavoriteToggleAction(speakerRec: Speaker) {
  //throw new Error("Simulated error");
  const updatedSpeaker = { ...speakerRec, favorite: !speakerRec.favorite };
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await updateSpeakerInCache(updatedSpeaker);
}
