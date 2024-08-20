import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';


const BookMark = ({ appToBook }) => {
    return (
        <div className='md:w-1/3 p-5'>
            <h2 className="text-3xl">BookMarked Blogs: {appToBook.length}</h2>
            {
                appToBook.map((bookmarkToBook, idx) => <Book
                    key={idx}
                    book={bookmarkToBook}
                ></Book>)
            }



        </div>
    );
};
BookMark.propTypes = {
    bookmark: PropTypes.object

}

export default BookMark;