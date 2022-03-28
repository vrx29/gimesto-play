export const filterData = (data, category) => {
  if (category === "All") {
    return [...data];
  }
  return data.filter((item) => item.category === category);
};
