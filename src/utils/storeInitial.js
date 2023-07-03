import { getItem } from "@/utils/localstorage";

export const getUser = () => {
  let user = typeof window !== "undefined" ? getItem("user") : null;
  user = user ?? {};
  return user;
};
