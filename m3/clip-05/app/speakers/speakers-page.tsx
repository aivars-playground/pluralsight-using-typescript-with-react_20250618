import SpeakerMenu from "@/app/speakers/speakers-menu";
import SpeakersList from "@/app/speakers/speakers-list";
import { SpeakerMenuProvider } from "@/app/speakers/speaker-menu-context";
import { getSpeakersFromCache } from "@/speakers-cache-service";
import { SpeakersDataProvider } from "@/app/speakers/speakers-data-context";
import { Speaker } from "@/app/types/speaker";
import { speakerSchema } from "@/app/types/speaker";

async function loadSpeakersData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return await getSpeakersFromCache() as Speaker[];
}

export default async function SpeakersPage() {
  const speakersData = await loadSpeakersData();
  let speakersDataParsed;
  try {
    speakersDataParsed = speakerSchema.array().parse(speakersData);
  } catch (err: unknown) {
    throw new Error("Invalid initial data" +
      (err instanceof Error ? err.message : "")
    );
  }
  return (
    <SpeakerMenuProvider>
      <SpeakerMenu />
      <SpeakersDataProvider initialData={speakersDataParsed}>
        <SpeakersList />
      </SpeakersDataProvider>
    </SpeakerMenuProvider>
  );
}
