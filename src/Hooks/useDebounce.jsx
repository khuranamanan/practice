import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debounceVal, setDebounceVal] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounceVal(value);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  });

  return debounceVal;
}

export default useDebounce;

// import { useEffect, useRef } from "react";

// function useDebounce(func, delay) {
//   const timeoutRef = useRef();

//   useEffect(() => {
//     return () => {
//       clearTimeout(timeoutRef.current);
//     };
//   }, []);

//   return function (...args) {
//     clearTimeout(timeoutRef.current);

//     timeoutRef.current = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// }

// export default useDebounce;
