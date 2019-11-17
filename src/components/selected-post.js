import React from 'react';
import PropTypes from 'prop-types';

const SelectedRow = ({post}) => {
    const renderPost = () => {
            return (
             <table>
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
    };
    return (
        <div className={'page-header'}>
            {renderPost()}
        </div>
    );
};

SelectedRow.propTypes = {
    post: PropTypes.object
};

export default SelectedRow;