import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';


const Blogs = ({ hendelBookMark }) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('cafe.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='md:w-2/3'>
            {/* <h1 className='text-3xl'>Blog: {blogs.length}</h1> */}
            {
                blogs.map(blogsCopy => <Blog
                    key={blogsCopy.id}
                    blog={blogsCopy}
                    hendelBookMark={hendelBookMark}
                ></Blog>)
            }


        </div>
    );
};
Blogs.propTypes = {
    hendelBookMark:PropTypes.func
}

export default Blogs;
