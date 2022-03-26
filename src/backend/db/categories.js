import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
  },
  {
    _id: uuid(),
    categoryName: "streaming",
  },
  {
    _id: uuid(),
    categoryName: "gameplay",
  },
  {
    _id: uuid(),
    categoryName: "review",
  },
  {
    _id: uuid(),
    categoryName: "accessories",
  },
];
