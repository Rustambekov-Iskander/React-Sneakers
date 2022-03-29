import React from 'react';
import cl from './Button.module.scss';

const ButtonBack = () => {
    const back = '<';

    return (
        <button className={cl.backButton}>{back}</button>
    );
};

export default ButtonBack;