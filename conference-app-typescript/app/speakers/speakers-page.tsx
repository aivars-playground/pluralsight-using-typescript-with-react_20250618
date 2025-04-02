import SpeakerMenu from "@/app/speakers/speakers-menu";
import SpeakersList from "@/app/speakers/speakers-list";
import { SpeakerMenuProvider } from "@/app/speakers/speaker-menu-context";
import { getSpeakersFromCache } from "@/speakers-cache-service";
import { SpeakersDataProvider } from "@/app/speakers/speakers-data-context";
import { speakerSchema } from "@/app/types/speaker";
import { z } from "zod";

// async function loadSpeakersData() {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return await getSpeakersFromCache();
// }

const speakersArraySchema = z.array(speakerSchema);


async function loadSpeakersData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const speakers = await getSpeakersFromCache();
  // Validate with Zod
  return speakersArraySchema.parse(speakers);
}

export default async function SpeakersPage() {

  const speakersData = await loadSpeakersData();

  let speakerDataParsed;
  try {
    speakerDataParsed = speakerSchema.array().parse(speakersData);
  } catch (err : unknown) {
    throw new Error("Invalid initial data" + (err instanceof Error ? err.message : ""));
  }



  return (
    <SpeakerMenuProvider>
      <SpeakerMenu />
      <SpeakersDataProvider initialData={speakerDataParsed}>
        <SpeakersList />
      </SpeakersDataProvider>
    </SpeakerMenuProvider>
  );
}
