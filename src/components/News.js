import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)



    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(0);

        const url = `https://api.thenewsapi.com/v1/news/top?api_token=zOg8Qj1YGo2gHNz965Rf7szAR6tu1AJlZUqpob8A&locale=in&categories=${props.categories}&page=${page}`;

        setLoading(true);
        let data = await fetch(url);
        props.setProgress(20);
        let parsedData = await data.json();
        props.setProgress(60);

        setData(parsedData.data);
        setLoading(false);
        setTotalResults(parsedData.found);

        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalize(props.categories)} - NewsInfo`
        updateNews();
        /* eslint-disable */
    }, [])


    // const handlePrevClick = async () => {
    //     setPage(page - 1);
    //     updateNews();
    // }
    // const handleNextClick = async () => {
    //     setPage(page + 1);
    //     updateNews();
    // }

    const fetchMoreData = async () => {

        setPage(page + 1);
        const url = `https://api.thenewsapi.com/v1/news/top?api_token=zOg8Qj1YGo2gHNz965Rf7szAR6tu1AJlZUqpob8A&locale=in&categories=${props.categories}&page=${page + 1}`;

        let datas = await fetch(url);
        let parsedData = await datas.json();

        setData(data.concat(parsedData.data))
        setTotalResults(parsedData.found)

    };
    return (
        <>
            <h1 className="text-center" style={{ margin: '35px px', marginTop: '90px' }}>NewsInfo -  Top {capitalize(props.categories)} Headline</h1>

            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={data.length}
                next={fetchMoreData}
                hasMore={data.length !== totalResults}

                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row" >
                        {data.map((element) => {
                            return <div key={element.uuid}>

                                <NewsItem title={element.title} imgUrl={element.image_url} newsUrl={element.url} snippet={element.snippet} date={element.published_at} />

                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.found / 5)} className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
        </>
    )
}


News.defaultProps = {
    country: 'in',
    categories: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    categories: PropTypes.string
}