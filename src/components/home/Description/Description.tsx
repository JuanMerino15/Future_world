"use client"
import Image from 'next/image';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Description.module.sass';



const PLACEHOLDER_IMAGE = "data:image/jpeg;base64,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"

export const Description = () => {
    const [hasBorder, setBorder] = useState(false);

    const handleClick = () => setBorder(!hasBorder);

    const cx = classNames.bind(styles)

    const buttonStyles = cx('Description__button', {
        'Description__button--border': hasBorder,
    })

    


    return(
        <section className={styles.Description}>
            <button onClick={handleClick} className={buttonStyles}>
            <div className={styles.Description__imageContainer}>
            <Image
             src="/images/910c97ae-e930-4cfa-afe0-67dba6a620ae.jpg" 

             alt="products marketplace" 
             fill
             placeholder='blur'
             blurDataURL={PLACEHOLDER_IMAGE}
             />
            </div>
            </button>
           
           
             

            <div className={styles.Description__text}> 

                <h2>Description</h2>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt possimus iusto harum, quam maiores sapiente? Harum vero assumenda quae! Iste ducimus quae tempore cupiditate itaque autem corporis laboriosam officia maiores.</p>

            </div>

        </section>
    )
}