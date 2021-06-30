import React from 'react'
import "../style/feed.css"
import news1 from "../img/news1.jpg"
import news2 from "../img/news2.jpeg"
import news3 from "../img/news3.jpg"
import news4 from "../img/news4.png"
import news5 from "../img/news5.jpg"

const NewsFeed = ({yahooNews}) => {

    let img_list = [news1, news2, news3, news4, news5]



    let newsGen = (() => {
        return img_list[Math.floor(Math.random()*img_list.length)];
    })
   

    let allYahooNews = yahooNews.news.map((article, index) => {

        return (
            <div className="feed-container" key={index}>
                
                <ul  className="feed-ul">

                    <li>
                        <a href={article.link} target="_blank"><img src={newsGen()} alt="news_image" width="350"></img></a>
                    </li>

                    <li className="feed-title-li"> 
                        <a href={article.link} target="_blank">{article.title}</a> 
                    </li>

                    <li className="feed-publisher-li">{article.publisher}</li> 
                    <li className="feed-date-li">{new String(Date(article.providerPublishTime))}</li> 
                    
                </ul>
            </div>
        )
        })
    

         console?.log(yahooNews)
    return (

        <div>
                <h1 className="header">News</h1> 

            {allYahooNews}
        </div>
    )
}

export default NewsFeed
