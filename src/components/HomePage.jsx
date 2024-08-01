import NavBar from './NavBar'
import styles from './HomePage.module.css'

function HomePage () {
    return <> 
    <div className= {styles.container}>
    <div className={styles.rightFlex}>
        <NavBar />
    </div>
    <div className={styles.leftFlex}>    
    </div>
    </div>

    </>
}

export default HomePage;