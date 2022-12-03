import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'
import styles from './Banner.module.css'


export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, mundo!</h1>
        <p className={styles.paragrafo}>
          Olá! Meu nome é Tício e este é o meu blog pessoal. Aqui você encontrará conteúdos sobre diversos assuntos que me interessam, como viagens, culinária, cultura, tecnologia e muito mais. Estou aqui para compartilhar minhas experiências e conhecimentos com vocês, além de discutir assuntos interessantes e relevantes. Espero que vocês gostem do que encontrarem aqui e que possam se divertir lendo meus posts. Obrigado por visitar! (texto criado por uma IA)
        </p>
      </div>
      <div className={styles.imagens}>
        <img className={styles.circuloColorido} src={circuloColorido} alt='' aria-hidden={true} />
        <img className={styles.minhaFoto} src={minhaFoto} alt='Foto do Tício'/>
      </div>
    </div>
  )
}