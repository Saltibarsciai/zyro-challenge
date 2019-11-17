import React from 'react';
import PropTypes from 'prop-types';

const SelectedPost = ({post}) => {
    const renderPost = () => {
        if(post !== null){
            return (
                <table className={'w-100 text-center table fetched'}>
                    <tbody>
                        <tr>
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
                    </tbody>
                </table>
            );
        }
    };
    return (
        <div>
            {renderPost()}
        </div>
    );
};

SelectedPost.propTypes = {
    post: PropTypes.object
};

export default SelectedPost;