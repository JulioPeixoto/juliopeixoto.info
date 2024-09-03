import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [didMatch, setDidMatch] = useState(false);
  useEffect(() => {
    const watcher = window.matchMedia(query);
    setDidMatch(watcher.matches);

    watcher.addEventListener("change", (event) => {
      setDidMatch(event.matches);
    });
    return () => {
      watcher.removeEventListener("change", (event) =>
        setDidMatch(event.matches)
      );
    };
  }, [query]);
  return didMatch;
};

export default useMediaQuery;
