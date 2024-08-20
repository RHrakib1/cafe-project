import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
    const {title}=book
    return (
        <div className='bg-gray-200 m-2 p-2 rounded-xl'>
            <h1 className='p-5'>{title}</h1>

        </div>
    );
};
Book.propTypes={
    book:PropTypes.array
}

export default Book;