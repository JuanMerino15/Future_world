import styles from './Description.module.sass';
import Image from 'next/image';


export const Description = () => {
    return(
        <section className={styles.Description}>

            <Image
             src="/images/910c97ae-e930-4cfa-afe0-67dba6a620ae.jpg" 

             alt="products marketplace" 
             width={500} 
             height={300}
            
             
             />
             

            <div className={styles.Description__text}> 

                <h2>Description</h2>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt possimus iusto harum, quam maiores sapiente? Harum vero assumenda quae! Iste ducimus quae tempore cupiditate itaque autem corporis laboriosam officia maiores.</p>

            </div>

        </section>
    )
}