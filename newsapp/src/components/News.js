/* eslint-disable no-template-curly-in-string */

import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general',
        apiKey: ''
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        api: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            loading: false,
            articles: [],
            page: 1
        }
    }

    async componentDidMount() {

        let url = "https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });
    }

    nextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        });
    }

    prevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        }
        );
    }

    render() {
        return (
            <>
                <div className="grid grid-cols-1 gap-4 my-10 py-4 md:grid-cols-3">
                    {this.state.articles && this.state.articles.length ? this.state.articles.map((element) => {
                        return <NewsItem key={element.url} title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} author={element.author} imageUrl={element.urlToImage} />
                    }) : null}
                </div>
                <div className="flex flex-row justify-around">
                    <button disabled={this.state.page < 1} className='bg-gray-200 text-bold text-gray-700 p-2 rounded-sm m-4' onClick={this.prevClick}>&larr; Previous</button>
                    <button className='bg-gray-200 text-bold text-gray-700 p-2 rounded-sm m-4' onClick={this.nextClick}>Next &rarr;</button>
                </div>

            </>
        )
    }
}
