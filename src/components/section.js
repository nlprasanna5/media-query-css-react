import styles from './Media.module.css';

function Section() {
    return (
        <>
            {/* Section below header */}
            <section className={styles.mainSection}>
                {/* Left side */}
                <div className={styles.leftSide}>
                    <h2>Let's bring your team together in onclick</h2>
                    <p className={styles.text}> We help you to manage all of your Work and daily task in office</p>
                    <div className={styles.btn}>
                        <button>Get Started</button>
                    </div>

                    {/* Add text and button */}
                </div>

                {/* Right side */}
                <div className={styles.rightSide}>
                    {/* Add image */}
                    <img src='https://i.pinimg.com/originals/b3/31/1d/b3311d7b4caee74ea8e64778e193ab38.png' alt='time management' />
                </div>
            </section>
        </>
    )
}

export default Section;