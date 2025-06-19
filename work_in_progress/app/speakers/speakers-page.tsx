import SpeakerMenu from "@/app/speakers/speakers-menu";
import SpeakersList from "@/app/speakers/speakers-list";
import { SpeakerMenuProvider } from "@/app/speakers/speaker-menu-context";
import { getSpeakersFromCache } from "@/speakers-cache-service";
import { SpeakersDataProvider } from "@/app/speakers/speakers-data-context";
import {Speaker} from "@/app/types/Speaker";

async function loadSpeakersData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await getSpeakersFromCache() as Speaker[];
}

export default async function SpeakersPage() {
  const speakersData = await loadSpeakersData();
  return (
    <SpeakerMenuProvider>
      <SpeakerMenu />
      <SpeakersDataProvider initialData={speakersData}>
        <SpeakersList />
      </SpeakersDataProvider>
    </SpeakerMenuProvider>
  );
}
