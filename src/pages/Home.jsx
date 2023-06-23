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

            </div> 
              <section className={styles.contenido}>
                <section className={styles.img}>
                 <img src={img} />          
                </section>
               <section className={styles.texto}>
                <h1>Connected World</h1>
                <p>Por un mundo conectado, por un mundo mejor.</p> 
              </section>
           </section>
      </main>

      <main id="Home" className={styles.home}>
        <h1>hola</h1>
      </main>
      </>
    )
  }
  
  export default Home
  