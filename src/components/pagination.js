import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({perPage, total, paginate, current}) => {
    const pageIndexes = [];
    const totalPageIndexes = Math.ceil(total/perPage);
    const boundaries = 10;
    for (let i = (current - boundaries > 0 ? current - boundaries: 1);
         i < (current + boundaries > totalPageIndexes ? totalPageIndexes: current + boundaries); i++) {
        pageIndexes.push(i);
    }
    return (
        <nav>
            <ul className={'pagination'}>
                {pageIndexes.map( currentIndex => (
                    <li key={currentIndex} className={'page-item'}>
                        <a onClick={ () => paginate(currentIndex)} href="#" className={'page-link'}>
                            {currentIndex}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    perPage: PropTypes.number,
    total: PropTypes.number,
    paginate: PropTypes.func,
    current: PropTypes.number
};

export default Pagination;