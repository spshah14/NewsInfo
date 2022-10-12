import React from 'react'

export default function NewsItem(props) {
    let { title, imgUrl, newsUrl, snippet, date } = props;
    return (
        <div>
            <div className="container my-3">
                <div className="card mb-3" >
                    <div className="row g-0" >
                        <div className="col-md-4">
                            <img src={imgUrl} className="img-fluid" alt="News" style={{ height: '200px', width: '100%', objectFit: "fill" }} />
                        </div>
                        <div className="col-md-8 cardcolor">
                            <div className="card-body ">
                                <h5 className="card-title">{title}</h5>
                                {/* <p className="card-text">{description}</p> */}
                                <p className="card-text">{snippet}</p>
                                <a href={newsUrl} rel="noreferrer" target="_blank" >Read More</a>
                                <p className="card-text"><small className="text-muted" style={{ bottom: '90%' }}>Published on {new Date(date).toGMTString()}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
