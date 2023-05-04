import Card from "./components/card"
import './App.css'

function App() {

  return (
    <>
    <section id="cartoes">
      {
      noticias.map((noticia)=>{
        return noticia.status && <Crad
                   titulo={noticia.titulo}
                    descricao={noticia.descricao}
                    link={noticia.link}/>
      })
    }
    </section>
    </>
  )
}

export default App
