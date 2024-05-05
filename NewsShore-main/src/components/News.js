import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bf8f4ccc5aaf47a28e462cd36b45e717`;
            
            const response = await fetch(url);
            const data = await response.json();
            if (data.articles && Array.isArray(data.articles)) {
                setArticles(data.articles);
            } else {
                console.error("Invalid data format:", data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    const handlePreviousClick = () => {
        console.log('previous');
        setLoading(true);
        setPage(page - 1);
        fetchData();
    }

    const handleNextClick = () => {
        console.log('next');
        setLoading(true);
        setPage(page + 1);
        fetchData();
    }

    const pageSize = 8;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayedArticles = articles.slice(startIndex, endIndex);

    console.log("render");
    return (
        <div className="container my-3">
            <h3 style={{ margin: '70px 400px' }}>NewsShore - Top News Headlines</h3>
            {loading && <Spinner />}
            <div className="row">
                {displayedArticles.map((article) => (
                    <div className="col-md-3" key={article.url}>
                        <NewsItem
                            title={article.title ? article.title.slice(0, 45) : ""}
                            imageUrl={article.urlToImage}
                            newsUrl={article.url}
                            description={article.description ? article.description.slice(0, 45) : ""}
                            author={article.author}
                            date={article.publishedAt}
                            source={article.source.name} // Assuming source is an object with a name property
                        />
                    </div>
                ))}
            </div>
            <div className="container d-flex justify-content-between">
                <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={handlePreviousClick}>&larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div>
        </div>
    );
}

News.defaultProps = {
    country: 'us',
    pageSize: 8
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
}

export default News;
