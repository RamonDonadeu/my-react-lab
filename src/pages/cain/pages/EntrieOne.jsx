import React from 'react'
import PageTwentyOne from '../cainPages/PageTwentyOne'
import Entrie from '../components/Entrie'
import Reference from '../components/Reference'

const EntrieOne = () => {
  return (
    <Entrie title={'Primera Lectura'} date={'15 Agosto'}>
      <div className="parrafo">
        Lo primero que decidi hacer al empezar a leer el libro fue, en orden,
        empezar a apuntar todas las localicaciones que se mencionaran y todos
        los nombres y lo que podia sacar de ellos. Si alguno aparecia en
        diferentes capitulos, si dos eran conocidos o tenian alguna otra
        relacion. Despues de haber revisado exactamente 50 paginas, sentia que
        estaba dejando mucha informacion de lado, pero queria seguir centrado
        con la busqueda de nombres y no irme por las ramas.
        <br />
        En 50 paginas habia encontrado un total de 54 nombres diferentes y,
        ademas, me di cuenta de un par de cosas que me preocupaban. Primero,
        algunos de ellos salian una sola vez y parecian personas irrelevantes.
        Por otro lado habia alguien que aparecia muchas veces, pero muchisimas.
        <b> Henry</b>, me parecia un punto central muy importante a tener en
        cuenta y que queria vigilar mas a fondo. Por otro lado, habia algo raro
        en este &quot;Henry&quot; .
      </div>
      <div className="referencias">
        <div className="referencia">
          <div className="numeroPagina">21</div>
          <div className="textoPagina">
            I turned sharply and there he was, bending over the body of his
            latest victim.
          </div>
          <div className="textoPagina">
            He pottered about with me and succeeded at last in making friends
            with Henry.
          </div>
        </div>
        <div className="referencia">
          <div className="numeroPagina">26</div>
          <div className="pagina">
            The girl had left Henry by this time, thank God.
          </div>
        </div>
      </div>
      <div className="explicacion">
        En estas frases, parece como si Henry fuera un animal, un perro quizas.
      </div>
      <div className="parrafo">
        Pero si miramos otras paginas nos encontramos lo siguiente.
      </div>
      <div className="referencias">
        <Reference pageNumber={'41'}>
          But it was not till my marriage with Henry that old Charles Goodfellow
          dared to hint that I was going gay
        </Reference>
        <Reference pageNumber={'42'}>
          I had let Henry guide me. She was very tall
        </Reference>
      </div>
      <div className="explicacion">
        Aqui vemos como Henry es, en el primer caso un ser humano, (Porque dudo
        que un perro se case), y en el segundo es una mujer. Llegados a este
        punto, quiza son
        <div className="comillas">Henrys</div>
        diferentes.
      </div>
      <div className="parrafo">
        Aqui cambie la metodologia a seguir. Dado que probablemente hubiera
        cosas colocadas en el libro para despistar, justamente como Henry. Asi
        que escogi unos cuantos colores para subrayar informacion que me
        pareciera interesante.
        <div className="colores">
          <div className="Morado">Pistas</div>
          <div className="Azul">Fechas</div>
          <div className="Naranja">Pistas POV</div>
          <div className="Gris">Relaciones</div>
          <div className="Verde">Localizaciones</div>
          <div className="Amarillo">Citas</div>
        </div>
        Algunos de estos seran autoexplicativos, pero vamos a hablar del color
        Narnja. <br />
        Tras un rato leyendo mas, me di cuenta de que quizas, habia paginas
        vistas desde el punto de vista de diferentes personas. <br />
        <div className="buscar">MENCION DE MAY Y JOHN PAUL CLEMANT WILLIAM</div>
      </div>{' '}
    </Entrie>
  )
}

export default EntrieOne
