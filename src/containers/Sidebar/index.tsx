import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import Avatar from '../../components/Avatar'
import { Descricao, BotaoTema } from './styles'
import { SidebarContainer } from './styles'

const Sidebar = () => (
    <aside>
        <SidebarContainer>
            <Avatar />
            <Titulo fontSize={20}>Álef Dutra</Titulo>
            <Paragrafo tipo="secundario" fontSize={16}>TAYLUNGpgrm</Paragrafo>
            <Descricao tipo="principal" fontSize={12}>Engenheiro Front-end</Descricao>
            <BotaoTema>Trocar tema</BotaoTema>
        </SidebarContainer>
    </aside>
)

export default Sidebar
