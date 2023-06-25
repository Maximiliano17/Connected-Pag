//Imagenes
import logo from "../assets/img/logo.png"
//Styles
import styles from "../Modules/Header.module.css"

function Header() {
 
    return (  
    <>
        <header className={styles.header}>
            <section className={styles.logo}>
              <button>  <img src={logo} alt="foto"/></button>
              <p>Petzify</p>
            </section>
            <section className={styles.listas}>
                <button> <a href="#home">Home</a> </button>
                <button> <a href="#SobreNosotros">Sobre Nosotros</a> </button>
                <button> <a href="#Nuestra">Nuestra App</a> </button>
                <button> <a href="#eventos">Eventos</a> </button>
            </section>
            <section className={styles.menu_res}>
              <button> 
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
              </svg>
              </button>
            </section>
        </header>
</>
    )
  }
  
  export default Header
  