import React from 'react';
import PropTypes from 'prop-types';

const BtnShowAll = ({showAll}) => {
    return (
        <div className={'btn w-100 mb-3'} onClick={() => showAll()}>
            All post
        </div>
    );
};

BtnShowAll.propTypes = {
    showAll: PropTypes.func
};

export default BtnShowAll;