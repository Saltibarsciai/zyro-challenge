import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({perPage, total, paginate, current}) => {
    const pageIndexes = [];
    const totalPageIndexes = Math.ceil(total/perPage);
    const boundaries = 3;
    const start = (current - boundaries > 0 ? current - boundaries: 1);
    const finish = (current + boundaries > totalPageIndexes ? totalPageIndexes: current + boundaries);
    for (let i = start; i < finish; i++) {
        pageIndexes.push(i);
    }
    return (
        <nav className={'w-100'}>
            <ul className={'pagination justify-content-center'}>
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