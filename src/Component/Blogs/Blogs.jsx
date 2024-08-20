import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('cafe.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='md:w-2/3'>
          <h1>Blog: {blogs.length}</h1>
          {
            blogs.map(blogsCopy=><Blog 
                key={blogsCopy.id}
                blog={blogsCopy}
                ></Blog>)
          }
            

        </div>
    );
};

export default Blogs;
