import React, { useEffect } from 'react';
import './App.css';
import styles from './App.module.css';

const Children = () => {
    useEffect(() => {
        console.log('Я родился');

        return () => {
            console.log('Я ушел');
        };
    }, []);

    return (
        <div className='image-container'>
            <img src='https://foni.papik.pro/uploads/posts/2024-10/foni-papik-pro-mzmz-p-kartinki-geroi-multfilma-luntik-na-prozrac-18.png' alt='Example' className='centered-image' />
        </div>
    );
};

export default Children;
