export type ReducerActionType =
  | {
      actionType: "TOGGLE_FAVORITE_OPTIMISTIC";
      payload: boolean;
    }
  | {
      actionType: "TOGGLE_FAVORITE_REVERT";
      payload: boolean;
    }
  | {
      actionType: "ERROR";
      payload: string;
    }
  | {
      actionType: "CLEAR_ERROR";
    };
