import './styles/main.scss';
import { motion } from 'framer-motion';
import ScrollToTop from 'react-scroll-to-top';

const App = () => {
  return (
    <>
      <header>
        <h1>Cordel Moderno</h1>
      </header>

      <main>
        <motion.div
          className="poemaum"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p>
            Estou ficando cansado <br />
            Da tal tecnologia <br />
            Só se fala por e-mail <br />
            Mensagem curta e fria <br />
            Twitter e Facebook <br />
            Antes que eu caduque <br />
            Vou dizer tudo em poesia.
          </p>
        </motion.div>

        <div className="imgfundoum">
          <p>
            Não é mais como era antes <br />
            É tudo abreviado <br />
            "Você" só tem duas letras <br />
            O "O" e o "E" foi riscado <br />
            Para declarar o amor <br />
            Basta botar uma flor <br />
            E um coração desenhado.
          </p>
        </div>

        <motion.div
          className="poemadois"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p>
            Arroba agora não pesa <br />
            É parte de um endereço <br />
            Ponto final nem se usa <br />
            Ou vai até no começo <br />
            Agora é .com <br />
            Se o saite é muito bom <br />
            Ele vale um alto preço. <br />
            <br />
            Pra piorar a liguagem <br />
            O emoticom é um risco <br />
            Tem símbolo para tudo <br />
            Ponto e vírgula e um asterisco <br />
            Um beijo significa <br />
            Pra entender como fica <br />
            Decifre esse rabisco.
          </p>
        </motion.div>

        <div className="imgfundodois">
          <p>
            Tenho saudade das cartas <br />
            Escritas com a própria mão <br />
            Mandava no mês de Junho <br />
            Só chegava no Verão <br />
            Mas matava a saudade <br />
            Era texto de verdade <br />
            Nas linhas do coração.
          </p>
        </div>

        <motion.div
          className="poematres"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p>
            Agora, escrevo e envio <br />
            Chegando na mesma hora <br />
            Mas quando vou prosear <br />
            A pessoa foi embora <br />
            Abriu outro aplicativo <br />
            O mundo ficou cativo <br />
            Da tecnologia do agora. <br />
            <br />
            Felizmente, pra orar <br />
            Não precisa de internet <br />
            Deus escuta todo mundo <br />
            Se quiser, faça esse teste <br />
            Dois pontos são dois joelhos <br />
            Seus lábios são aparelhos <br />
            Deixe que Deus interprete.
          </p>
        </motion.div>

        <ScrollToTop
          smooth
          className="scroll-top-custom"
          component={<span className="scroll-icon">↑</span>}
        />
      </main>

      <footer>
        <p>
          Site criado por Rafael pelo{' '}
          <a href="https://www.cursoemvideo.com/" target="_blank" rel="noreferrer">
            Curso em Vídeo
          </a>
        </p>
      </footer>
    </>
  );
};

export default App;
