import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Posts = ({posts, fetchSelected, setSortBy}) => {
    const [selectedID, setSelectedID] = useState(0);
    const select = (post) => {
        setSelectedID(post.id);
        fetchSelected(post);
    };
    const sortBy = (field) => {
        setSortBy(field)
    };
    return (
        <table>
            <thead>
            <tr>
                <td>
                    <button onClick={() => sortBy('id')}>
                        ID
                    </button>
                </td>
                <td>
                    <button onClick={ () => sortBy('title')}>
                        Title
                    </button>
                </td>
                <td>
                    <button onClick={ () => sortBy('albumId')}>
                        Album ID
                    </button>
                </td>
            </tr>
            </thead>
            <tbody>
                {posts.map( post => (
                    <tr key={post.id} onClick={() => select(post)} className={post.id !== selectedID ? 'default': 'selected'}>
                        <td>
                            {post.id}
                        </td>
                        <td>
                            {post.title}
                        </td>
                        <td>
                            {post.albumId}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Posts.propTypes = {
    posts: PropTypes.array,
    setSortBy: PropTypes.func,
    fetchSelected: PropTypes.func
};

export default Posts;