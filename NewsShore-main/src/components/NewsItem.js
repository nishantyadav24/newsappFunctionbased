import React from 'react';


const NewsItem  =(props)=> {
 
        const { imageUrl, title, description, newsUrl, author, date, source } = props; // Destructuring props
        return (
            <div className="container my-3">
                <div className="card" style={{ width: "18rem", position: "relative" }}> {/* Added relative positioning */}
                    <img src={imageUrl || "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2024%2F03%2F51418182235_d4628c2c3c_k-e1711624087298.jpg&signature=105104c9b86d9111d7813bb9e52859fd"} className="card-img-top" alt="..." />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"  style={{ transform: 'translate(-50%, 0%)',zIndex: 1 }}> {/* Custom translate */}
   {source}
  </span>

                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        );
    }


export default NewsItem;
