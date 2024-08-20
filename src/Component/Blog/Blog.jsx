import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title } = blog
    return (
        <div>
            <p>{title}</p>

        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;