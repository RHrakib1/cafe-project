import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, hendelBookMark, heandleread }) => {
    const { title, cover, reading_time, posted_date, author_img, author, hashtags } = blog



    return (
        <div className='mb-20'>
            <img className='w-full rounded-lg mb-4' src={cover} alt={`the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex my-4'>
                    <img className='w-14 rounded-full ' src={author_img} alt="nai" />
                    <div className='ml-6 '>
                        <h2 className='font-bold text-2xl'>{author}</h2>
                        <p className=' text-xs text-gray-600'>{posted_date}<span className=''>(4 days pre)</span></p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <span className='text-gray-600'>{reading_time} min read</span>
                    <button onClick={() => hendelBookMark(blog)} className='text-gray-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <p className='font-bold text-4xl mb-2'>{title}</p>
            <h3 className='flex gap-2 text-gray-600'>
                {
                    hashtags.map((addHash, idx) => <p key={idx}><a href="">{addHash}</a></p>)
                }
            </h3>
            <button onClick={() => heandleread(reading_time)} className='mt-5'> <a className='text-sm text-blue-700 ' href="#">Mark as read</a></button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    hendelBookMark: PropTypes.func,
    heandleread: PropTypes.func
}
export default Blog;