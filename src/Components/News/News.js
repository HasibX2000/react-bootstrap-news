import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'

const News = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    const url =
      'https://newsapi.org/v2/everything?q=tesla&from=2022-10-08&sortBy=publishedAt&apiKey=32b8245ea0524928b12eb68f695a8396'
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
  }, [])

  return (
    <div>
      <h2 className="text-center">Total News Count : {news.length}</h2>
      {news.map((news) => (
        <Cards post={news} key={news.url}></Cards>
      ))}
    </div>
  )
}

export default News
