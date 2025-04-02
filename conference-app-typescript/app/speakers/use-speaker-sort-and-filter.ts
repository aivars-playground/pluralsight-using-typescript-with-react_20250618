import { Speaker } from "@/app/types/speaker";

export default function useSpeakerSortAndFilter(
  speakerList: Speaker[],
  speakingSaturday: boolean,
  speakingSunday: boolean,
  searchText: string,
) {
  return speakerList
    ? speakerList
        .filter(
          ({ sat, sun }: { sat: boolean; sun: boolean }) =>
            (speakingSaturday && sat) || (speakingSunday && sun),
        )
        .filter(
          ({
            firstName,
            lastName,
          }: {
            firstName: string;
            lastName: string;
          }) => {
            return (
              searchText.length === 0 ||
              (firstName?.toLowerCase() + lastName?.toLowerCase()).includes(
                searchText.toLowerCase(),
              )
            );
          },
        )
        .sort((a, b) => a.firstName.localeCompare(b.firstName))
    : [];
}
