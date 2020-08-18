import { useState, useEffect, useRef } from "react";

const defaultValue = { data: null, loading: true, error: null };

export const useFetch = (url) => {
  const isMountedRef = useRef(true);
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    setState(defaultValue);

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMountedRef.current) {
          setState({
            data,
            loading: false,
            error: null,
          });
        } else {
          console.log("Se cancelo la peticion");
        }
      });
  }, [url]);

  return state;
};
