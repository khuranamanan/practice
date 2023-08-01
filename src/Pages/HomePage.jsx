import { useState } from "react";
import { testArray } from "../utils/testArray";
import useDebounce from "../Hooks/useDebounce";
import { useEffect } from "react";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const arr = [2, 4, 6, 8, 10];

  testArray(arr, (element) => element % 2 === 0)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });

  const fetchDemoData = (searchTerm) => {
    console.log("Fetching data with searchTerm:", searchTerm);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchDemoData(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search"
        className="px-3 py-2 border border-gray-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default HomePage;
