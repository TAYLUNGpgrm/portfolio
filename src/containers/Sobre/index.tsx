import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
    <section>
        <Titulo fontSize={16}>Sobre mim</Titulo>
        <Paragrafo tipo="secundario">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium illo, ullam, facilis quis totam nobis rem dicta tenetur possimus non alias! Dicta adipisci voluptas eligendi quam et obcaecati cumque totam?
        </Paragrafo>

        <GithubSecao>
            <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=TAYLUNGpgrm&theme=dracula"
                alt="GitHub Streak"
            />
        </GithubSecao>
    </section>
)

export default Sobre
