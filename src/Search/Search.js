import {useState, useEffect} from 'react';
import {Link,useLocation} from 'react-router-dom';

const Search=()=>{
  const [search,setSearch] = useState({tag:[],keyword:[]});
  const q = useLocation();

  useEffect(()=>{
    parceParam();
  },[q]);

  const exceptItemById=(target,id)=>{
    return target.map(e=>{if(e.id !== id)return e;}).fillter(e=>e);
  }
  const filter = (target)=>{
    let tagFlag=false,keywordFlag=false;
    if(search.tag.length>0){
      for(let i=0;i<target.tags.length;i++){
        for(let j=0;j<search.tag.length;j++){
          if(target.tags[i].id===search.tag[j]){
            tagFlag = true;
            break;
          }
        }
      }
    }else{
      tagFlag = true;
    }
    if(search.keyword.length>0){
      console.log(target.title)
      for(let j=0;j<search.keyword.length;j++){
        if(target.title.indexOf(search.keyword[j])!=-1){
          keywordFlag = true;
          break;
        }
      }
    }else{
      keywordFlag = true;
    }
    return tagFlag&&keywordFlag;
  }
  const parceParam = ()=>{
    let query = q.pathname;
    let params = {tag:[],keyword:[]};
    //urlパラメータをオブジェクトにまとめる
    query.substring(query.indexOf('?')+1).split('&').forEach( param => {
      const temp = param.split('=')
      //pramsオブジェクトにパラメータを追加
      params = {
        ...params,
        [temp[0]]: temp[1]
      }
    });
    let searchParam = {tag:[],keyword:[]};
    if(params.tag&&params.tag.length > 0)searchParam.tag=params.tag.split(',');
    if(params.keyword&&params.keyword.length > 0)searchParam.keyword=params.keyword.split(',');
    setSearch(searchParam);
  }
  const inSearch=()=>{
    return (search.tag.length>0)?true:false;
  }
  const createSerachParamString = ()=>{
    let param;
    if(search.tag)param+=search.tag.join()+'&';
    if(search.keyword)param+=search.keyword.join()+'&';
    return param;
  }

  const generateForm=()=>{
    return(
      <>
        <p>search</p>
        <input type="text"></input>
        { inSearch() ? (
          search.tag.map(tag=>(
            <p key={tag.id}>
              <span>search:{tag.name} </span>
              <Link to={`/article`}>
                return
              </Link>
            </p>
          ))
          ):""
        }
      </>
    );
  }
  return{
    search,
    generateForm,
    inSearch,
    filter,
    createSerachParamString
  }
}

export default Search;