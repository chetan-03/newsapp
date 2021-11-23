import React from 'react'

const NewsItem = (props) => {
    let { title, description, url, imgUrl, source, date, author } = props;
    return (
        <div className="container">
            <div className="card mx-3 my-3">
                <div style={{

                    display: 'flex',
                    justifyContent: 'end',
                    right: 0,
                    position: 'absolute'

                }}>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={!imgUrl ? 'https://images.hindustantimes.com/tech/img/2021/09/05/1600x900/2020-07-30T130417Z_435505951_RC2N3I9FG2XR_RTRMADP_3_SPACE-EXPLORATION-MARS_1596116304590_1596116323085_1630840774203.JPG' : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a rel="noreferrer" target="_blank" href={url} className="btn btn-dark">more details</a>
                    <p className="card-text"><small className="text-muted">Last updated by {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
