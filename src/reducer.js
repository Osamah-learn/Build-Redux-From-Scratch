export const BUG_ADDED = "bugAdded";
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          payload: action.payload.description,
          resolved: false,
        },
      ];
    default:
      return state;
  }
}
