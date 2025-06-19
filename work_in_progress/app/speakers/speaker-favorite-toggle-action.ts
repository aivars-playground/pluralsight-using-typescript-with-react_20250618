"use server";
import { updateSpeakerInCache } from "@/speakers-cache-service";
import {Speaker, speakerSchema} from "@/app/types/Speaker";

export async function speakerFavoriteToggleAction(speakerRec: Speaker) {
  //throw new Error("Simulated error");

  let validatedSpeaker
  try {
    validatedSpeaker = speakerSchema.parse(speakerRec)
  } catch (err: unknown) {
    throw new Error("server side error - invalid data - toggle " +
        (err instanceof Error ? err.message : "")
    )
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));
  await updateSpeakerInCache(validatedSpeaker);
}
