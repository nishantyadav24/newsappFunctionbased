import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 8
    }

    static propTypes = {
        name: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true, // Initially set loading to true
            page: 1,
            pageSize: 12
        };
    }

    componentDidMount() {
        // Fetch data when the component mounts
        this.fetchData();
    }

    async fetchData() {
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bf8f4ccc5aaf47a28e462cd36b45e717`;
            const response = await fetch(url);
            const data = await response.json();
            if (data.articles && Array.isArray(data.articles)) {
                this.setState({ articles: data.articles });
            } else {
                console.error("Invalid data format:", data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            this.setState({ loading: false });
        }
    }

    handlePreviousClick = () => {
        console.log('previous');
        this.setState({
            loading: true,
            page: this.state.page - 1
        }, () => {
            this.fetchData();
        });
    }

    handleNextClick = () => {
        console.log('next');
        this.setState({
            loading: true,
            page: this.state.page + 1
        }, () => {
            this.fetchData();
        });
    }

    render() {
        const { articles, page, pageSize, loading } = this.state;
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const displayedArticles = articles.slice(startIndex, endIndex);

        console.log("render");
        return (
            <div className="container my-3">
                <h3 style={{ margin: '30px 400px' }}>NewsShore - Top News Headlines</h3>
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
                <div className="container" className="d-flex justify-content-between">
                    <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        );
    }
}

export default News;
