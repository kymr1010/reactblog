import {useState} from 'react';
import axios from 'axios';

const useTag=()=>{
  const [tags,setTags]=useState("");
  const APIKEY='ef85ef3e-59bc-4149-a274-dec14e9fce97';

  const fetchTags=async()=>{
    await axios.get(`https://reactkymrblog.microcms.io/api/v1/tag`,{
      headers: {
          'Cache-Control': 'no-cache',
          'X-API-KEY':APIKEY
    },
    }).then(res=>{
      setTags(res.data.contents);
    });
  };

  return{
    tags,
    fetchTags
  }
}

export default useTag;