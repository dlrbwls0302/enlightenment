import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { changeLoading, setArticles, changeQuery } from '../actions';
import Article from '../components/Article';
import '../styles/News.css';
import { MdSearch } from 'react-icons/md';




const News = () => {
    // dispatch 변수 설정
    const dispatch = useDispatch();
    // store에 있는 state 가져오기
    const state = useSelector((state) => state.newsReducer);
    const { loading, articles, query, sampleArticles } = state;

    const onChange = (e) => {
        dispatch(changeQuery(e));
    }
    
    const onClick = async() => {
        dispatch(changeLoading());
        try{
            const response = await axios.get(`https://api.serpwow.com/live/search?api_key=F8062751AD8C4A868C91A320EBC73390&q=${query}&google_domain=google.co.kr&gl=kr&hl=ko&search_type=news`) 
            dispatch(setArticles(response.data.news_results))
        } catch(e){
            console.log(e);
        }
        dispatch(changeLoading());
    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            onClick();
        }
    }

    // useEffect(() => {
    //     const getArticles = async() => {
    //         dispatch(changeLoading());
    //         try{
    //             const response = await axios.get('https://api.serpwow.com/live/search?api_key=F8062751AD8C4A868C91A320EBC73390&q=선거&google_domain=google.co.kr&gl=kr&hl=ko&search_type=news',)
    //             console.log('response::: ', response)
    //             dispatch(setArticles(response.data.news_results))
    //         } catch(e){
    //             console.log(e);
    //         }
    //         dispatch(changeLoading());
    //     };
    //     getArticles();
    // }, []);

    // if(loading){
    //     return <div className='news-container'>뉴스 기사를 로딩 중 입니다...</div>
    // }
    // if(!articles){
    //     return null;
    // }
    return ( 
        <div className='news-container'>
            <div className='search-container'>
                <MdSearch className='search-icon' onClick={onClick}/>
                <input className='search-box' type='text' placeholder='확인하고 싶은 뉴스를 검색하세요.' onChange={onChange} onKeyPress={onKeyPress}/>               
            </div>
            {sampleArticles.map((article, index) => (
                <Article key={index} article={article} />
            ))}
            {/* {articles.map((article) => (
                <Article key={article.position} article={article} />
            ))} */}
        </ div>
    );
};

export default News;