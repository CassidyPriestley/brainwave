import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Brainwave`;
  }, [title]);
  return null;
};
