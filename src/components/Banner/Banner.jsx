import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'
import styles from './Banner.module.css'


export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, mundo!</h1>
        <p className={styles.paragrafo}>
        Olá! Meu nome é Raull Nueve e sou um desenvolvedor de front-end. Este blog é dedicado a compartilhar meus conhecimentos e experiências como desenvolvedor de front-end. Aqui, você encontrará informações sobre as últimas tendências e tecnologias de desenvolvimento web, bem como dicas e truques para ajudar você a melhorar suas habilidades de desenvolvimento. Espero que você encontre algo útil aqui e que possamos aprender juntos! (texto criado por uma I.A.)
        </p>
      </div>
      <div className={styles.imagens}>
        <img className={styles.circuloColorido} src={circuloColorido} alt='' aria-hidden={true} />
        <img className={styles.minhaFoto} src={minhaFoto} alt='Foto do Tício'/>
      </div>
    </div>
  )
}