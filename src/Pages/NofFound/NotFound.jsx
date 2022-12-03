import styles from './NotFound.module.css'
import erro404 from 'assets/erro_404.png'

export default function NotFound() {
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}> Ops! Página não encontrada.</h1>
        <p className={styles.paragrafo}>
          Uau! Parece que você encontrou o caminho errado. Não se preocupe, você não está perdido... mas estamos!
        </p>
        <p className={styles.paragrafo}>
          Não sabemos aonde este link te levou, mas é certo que não é a página que você está procurando. Por que não tentar voltar ao mapa e descobrir onde você deveria estar? (texto criado por uma I.A.)
        </p>
        <div className={styles.botaoContainer}>
          <button>Voltar</button>
        </div>
        <img className={styles.imagemCachorro} src={erro404} alt='Imagem 404' />
      </div>
      <div className={styles.espacoEmBranco}>

      </div>
    </>
  )
}