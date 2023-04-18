import {useCallback, useState} from 'react';
import axios from 'axios';

const useCachedApi = () => {
  const [cache, setCache] = useState({});

  const getData = useCallback(
    async url => {
      if (cache[url]) {
        return cache[url];
      }
      const {data} = await axios.get(url);
      setCache(prevCache => ({...prevCache, [url]: data}));
      return data;
    },
    [cache],
  );

  return getData;
};

export default useCachedApi;
