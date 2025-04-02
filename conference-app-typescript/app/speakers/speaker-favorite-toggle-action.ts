"use server";
import { Speaker, speakerSchema } from "@/app/types/speaker";
import { updateSpeakerInCache } from "@/speakers-cache-service";

export async function speakerFavoriteToggleAction(speakerRec: Speaker) {
  //const updatedSpeaker = { ...speakerRec, favorite: !speakerRec.favorite };

  let validatedSpeaker;
  try {
    validatedSpeaker = speakerSchema.parse(speakerRec);
  } catch (err : unknown) {
    throw new Error("Invalid initial data" + (err instanceof Error ? err.message : ""));
  }


  const updatedSpeaker = {
    ...validatedSpeaker,
    favorite: !validatedSpeaker.favorite,
  };

  await new Promise((resolve) => setTimeout(resolve, 2000));

  await updateSpeakerInCache(updatedSpeaker);
}
