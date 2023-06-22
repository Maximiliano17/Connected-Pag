//Styles
import styles from "../modules/Home.module.css"
//imagenes
import img from "../assets/img/logo.png"

function Home() {
    return (
      <>
          {/* Home */}
      <main className={styles.main}>
        <div className={styles.content}>
            <img src={img} />
            <h1>Connected World</h1>
            <p className={styles.slogan}>Por un mundo conectado, por un mundo mejor.</p> 
            </div> 
      </main>
      <main id="Home" className={styles.home}>
        <h1>hola</h1>
      </main>
      </>
    )
  }
  
  export default Home
  