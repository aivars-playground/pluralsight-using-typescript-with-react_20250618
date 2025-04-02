"use server";
import { updateSpeakerInCache } from "@/speakers-cache-service";

export async function speakerFavoriteToggleAction(speakerRec) {
  const updatedSpeaker = { ...speakerRec, favorite: !speakerRec.favorite };
  await new Promise((resolve) => setTimeout(resolve, 10000));
  await updateSpeakerInCache(updatedSpeaker);
}
