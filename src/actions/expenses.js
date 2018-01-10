import uuid from "uuid";

// ADD_EXPENSE action generator
export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

// [
//   { amount: 195, createdAt: 0, description: "Gum", id: "1", note: "" },
//   {
//     amount: 109500,
//     createdAt: -345600000,
//     description: "Rent",
//     id: "2",
//     note: ""
//   },
//   {
//     amount: 4500,
//     createdAt: 345600000,
//     description: "Credit Card",
//     id: "3",
//     note: ""
//   },
//   undefined
// ];

// [
//   { amount: 195, createdAt: 0, description: "Gum", id: "1", note: "" },
//   {
//     amount: 109500,
//     createdAt: -345600000,
//     description: "Rent",
//     id: "2",
//     note: ""
//   },
//   {
//     amount: 4500,
//     createdAt: 345600000,
//     description: "Credit Card",
//     id: "3",
//     note: ""
//   }
// ];
