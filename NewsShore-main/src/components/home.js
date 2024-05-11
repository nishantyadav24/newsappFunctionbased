import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container-fluid bg-dark text-light p-5">
            <div className="container">
                <h1 className="display-4 mb-4">Welcome to NewsShore</h1>
                <p className="lead">
                    NewsShore is your go-to destination for the latest news updates from around the world. Powered by NewsAPI, 
                    our app provides you with top headlines, breaking news, and insightful articles on a variety of topics.
                </p>
                <p className="lead">
                    Whether you're interested in politics, technology, sports, or entertainment, NewsShore has you covered.
                    Explore our website to stay informed and up-to-date with the latest happenings.
                </p>
                <Link to="/" className="btn btn-primary btn-lg">Explore News</Link>
            </div>
        </div>
    );
}

export default Home;
