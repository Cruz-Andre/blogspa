import PostPage from "components/PostPage/PostPage";

import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.png'

import styles from './AboutMe.module.css'

export default function AboutMe() {
  return (
    <PostPage
      fotoCapa={fotoCapa}
      titulo={"Sobre Mim"}
    >
      <h3 className={styles.subtitulo}>Olá eu sou Raull Nueve</h3>

      <img className={styles.fotoSobreMim} src={fotoSobreMim} alt='minha foto' />
      <p className={styles.paragrafo}>
        Olá, meu nome é Raull Nueve e sou um desenvolvedor front-end. Desde a minha adolescência, eu sempre gostei de tecnologia e programação, então decidi que queria tornar isso uma carreira.
      </p>
      <p className={styles.paragrafo}>
        Eu comecei a me interessar por desenvolvimento web quando entrei na faculdade de ciência da computação. Eu descobri que havia muitas maneiras diferentes de construir sites, e foi então que eu decidi me dedicar ao front-end. Eu estudei as linguagens de programação C, C#, Java, HTML, CSS e JavaScript e me apaixonei.
      </p>
      <p className={styles.paragrafo}>
        Eu comecei a me especializar em desenvolvimento front-end, e me tornei cada vez mais fluente em HTML, CSS, JavaScript e outras tecnologias relacionadas. Aprendi sobre como construir sites responsivos e interativos, e comecei a trabalhar em projetos para empresas locais.
      </p>
      <p className={styles.paragrafo}>
        Agora, após anos de estudo e prática, sou um desenvolvedor front-end experiente. Tenho a capacidade de criar sites responsivos, interativos e modernos, usando as melhores tecnologias. Estou sempre aberto a novas oportunidades de aprendizado e desenvolvimento. (Texto criado por uma I.A.)
      </p>

    </PostPage>
  )
}