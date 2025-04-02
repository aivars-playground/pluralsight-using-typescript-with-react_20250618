import { ReducerActionType } from "./reducer-action-type";

export default function Page() {
  const reducerDataArray: ReducerActionType[] = [
    {
      actionType: "TOGGLE_FAVORITE_OPTIMISTIC",
      payload: true,
    },
    {
      actionType: "ERROR",
      payload: "Error Toggling Favorite",
    },
    {
      actionType: "TOGGLE_FAVORITE_REVERT",
      payload: false,
    },
    {
      actionType: "CLEAR_ERROR",
    },
  ];

  return <pre>{JSON.stringify(reducerDataArray, null, 2)}</pre>;
}
