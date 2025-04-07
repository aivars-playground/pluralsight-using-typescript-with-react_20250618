export default function useSpeakerSortAndFilter(
  speakerList,
  speakingSaturday,
  speakingSunday,
  searchText,
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
