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
        <table className={'w-100 table'}>
            <thead>
                <tr>
                    <th onClick={() => sortBy('id')}>
                        ID
                    </th>
                    <th onClick={ () => sortBy('title')}>
                        Title
                    </th>
                    <th onClick={ () => sortBy('albumId')}>
                        Album ID
                    </th>
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