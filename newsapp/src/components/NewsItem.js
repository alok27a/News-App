import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title,description,author,imageUrl,key} = this.props;
        return (
            <>
                <div className="p-10">
                    <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
                        <img className="w-full" src={imageUrl} alt="Mountain" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{title}...</div>
                            <p className="text-gray-700 text-base">
                                {description}...
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{author}</span><br/>
                            <button className='bg-gray-200 text-bold text-gray-700 p-2 rounded' href={key}>Read More</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
