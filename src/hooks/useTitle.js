import { useEffect } from "react"

const useTitle = title => {
  useEffect(() => {
    document.title = `ToyGalaxyHub | ${title}`;
  }, [title]);
}

export default useTitle;