import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import useArticle from './useArticle';
import Search from '../Search/Search';

const Index=()=>{
  const {articles,fetchArticles} = useArticle();
  const { search, inSearch, parceParam, filter } = Search();
  const SearchForm = Search().generateForm;

  useEffect(()=>{
    fetchArticles();
  },[search]);

  const findTagId=(tags,id)=>{
    for(let tag of tags){
       if(tag.id===id)return true;
     };
     return false;
   }
   
  const displayArticleNode=(article)=>{
    return (
      <li key={article.id}>
        {
          article.visual?(
            <Link to={`/article/${article.id}`}>
              <img src={article.visual?.url} alt="kv"/>
            </Link>):""
        }
        <Link to={`/article/${article.id}`}>
          <h3>{article.title}</h3>
        </Link>
        <time>{article.createdAt}</time>
        <p>{article.content}</p>
        <ul>
        {
          article.tags.map(tag=>(
            <li key={tag.id}>
              <Link to={ { pathname:`/article?tag=${tag.id}`} }>
                <span className="tag">{tag.name}</span>
              </Link>
            </li>
          ))
        }
        </ul>
        <hr/>
      </li>
    )
  }

  return(
    <>
    <button onClick={()=>console.log(search)}> console.log(search) </button>
    <button onClick={()=>console.log(search.tag.length)}> console.log(search.tag.length) </button>
    <button onClick={()=>parceParam()}> parceParam() </button>
    <button onClick={()=>console.log(inSearch())}> inSearch() </button>
      <h2>Articles</h2>
      <SearchForm />
      {/* <search.generateForm /> */}
      <ul>
        {
          articles.map(article => {
            if(inSearch()){
              if(filter(article)){
                return displayArticleNode(article);
              };
            }else{
              return displayArticleNode(article);
            }
          }).filter(x => x)
        }
      </ul>
    </>
  );
}
export default Index;