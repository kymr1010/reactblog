import React,{useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import useArticle from './useArticle';

const Show=()=>{
  const {id}=useParams();
  const {article,fetchArticle}=useArticle();

  useEffect(()=>{
    fetchArticle(id);
  },[]);
  
  return(
    <>
      <Link to={`/article`}>
          back
        </Link>
      {article?(<>
        {
          article.visual?(
            <img src={article.visual?.url} alt="kv"/>
          ):""
        }
        <Link to={`/article/${article.id}`}>
          <h3>{article.title}</h3>
        </Link>
        <time>{article.createdAt}</time>
        <p>{article.content}</p>
        <ul>
        {
          article.tags?article.tags.map(tag=>(
            <li key={tag.id}>
              <Link to={ { pathname:`/article?tag=${tag.id}`} }>
                <span className="tag">{tag.name}</span>
              </Link>
            </li>
          )):""
        }
        </ul>
      </>):<p>Not Found</p>
      }
    </>
  );
}

export default Show;