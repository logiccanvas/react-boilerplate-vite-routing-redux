export const setItem = (name, data) =>
  localStorage.setItem(name, JSON.stringify(data));

export const getItem = (name) => {
  const data = localStorage.getItem(name);
  return JSON.parse(data);
};

export const removeItem = (name) => {
  localStorage.removeItem(name);
};
