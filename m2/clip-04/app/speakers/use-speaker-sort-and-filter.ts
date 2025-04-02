export default function useSpeakerSortAndFilter(
  speakerList: {
    sat: boolean;
    sun: boolean;
    firstName: string;
    lastName: string;
  }[],
  speakingSaturday: boolean,
  speakingSunday: boolean,
  searchText: string,
) {
  return speakerList
    ? speakerList
        .filter(
          ({ sat, sun }) =>
            (speakingSaturday && sat) || (speakingSunday && sun),
        )
        .filter(({ firstName, lastName }) => {
          return (
            searchText.length === 0 ||
            (firstName?.toLowerCase() + lastName?.toLowerCase()).includes(
              searchText.toLowerCase(),
            )
          );
        })
        .sort((a, b) => a.firstName.localeCompare(b.firstName))
    : [];
}
