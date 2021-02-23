import {useState} from 'react';
import axios from 'axios';

const useArticle=()=>{
  const [articles,setArticles] = useState([]);
  const [article,setArticle] = useState({});

  const APIKEY='ef85ef3e-59bc-4149-a274-dec14e9fce97';

  const fetchArticles= async()=>{
    await axios.get(`https://reactkymrblog.microcms.io/api/v1/article`,{
      headers: {
         'Cache-Control': 'no-cache',
         'X-API-KEY':APIKEY
    },
    }).then(res=>{
      setArticles(res.data.contents);
    });
  };

  const fetchArticle= async(id)=>{
    await axios.get(`https://reactkymrblog.microcms.io/api/v1/article/${id}`,{
      headers: {
         'Cache-Control': 'no-cache',
         'X-API-KEY':APIKEY
    },
    }).then(res=>{
      setArticle(res.data);
    });
  };

  return{
    articles,
    article,
    fetchArticles,
    fetchArticle
  };
};

export default useArticle;