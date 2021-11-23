import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
const News = (props) => {
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResult, settotalResult] = useState(0);
    const updateNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        let res = await axios.get(url);
        props.setProgress(30)
        let parsedData = res.data;
        props.setProgress(70)
        setarticles(parsedData.articles);
        settotalResult(parsedData.totalResults)
        setloading(false)
        props.setProgress(100)
    }
    useEffect(() => {
        document.title = `${capitalize(props.category)} - NewsMonkey`;
        updateNews();
        // eslint-disable-next-line
    }, []);
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setpage(page + 1)

        // let client = axios.create({
        //     baseURL: url
        // });
        let response = await axios.get(url);
        let parsedData = response.data;
        setarticles(articles.concat(parsedData.articles));
        settotalResult(parsedData.totalResults)
    };
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <>
            <h4 className='text-center' style={{
                margin: '35px 0px',
                marginTop: '90px'
            }}>Monkey News -  Top {capitalize(props.category)} Headlines</h4>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResult}
                loader={<Spinner />}
            >
                <div className="row">
                    {!loading && articles.map((element => {
                        return <div key={element.url} className="col-md-4">
                            <NewsItem title={element.title ? element.title : ''} description={element.description} imgUrl={element.urlToImage} url={element.url} source={element.source.name} author={element.author} date={element.publishedAt} />
                        </div>
                    }))}
                </div>
            </InfiniteScroll>
        </ >
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
};
News.propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News;