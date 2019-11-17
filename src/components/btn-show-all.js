import React from 'react';
import PropTypes from 'prop-types';

const BtnShowAll = ({showAll}) => {
    return (
        <div onClick={() => showAll()}>
            <a href={'#'}>
                All post
            </a>
        </div>
    );
};

BtnShowAll.propTypes = {
    showAll: PropTypes.func
};

export default BtnShowAll;