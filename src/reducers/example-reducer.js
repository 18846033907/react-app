import {
  ADD_EXAMPLE_SUCCESS,
  ADD_EXAMPLE_PENDING,
  ADD_EXAMPLE_FAILED,
} from "actions/action-types.js";
const initialState = {
  shops: [
    {
      product: "面包",
      quantity: 2,
      unitCost: 90,
    },
    {
      product: "牛奶",
      quantity: 1,
      unitCost: 47,
    },
  ],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXAMPLE_SUCCESS:
      return { status: "SUCCESS", ...state };
    case ADD_EXAMPLE_PENDING:
      return { status: "PENDING" };
    case ADD_EXAMPLE_FAILED:
      return { status: "error" };
    default:
      return state;
  }
};
