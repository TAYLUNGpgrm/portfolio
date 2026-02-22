import Titulo from '../../components/Titulo'
import { SidebarContainer } from './styles' // Importe o estilo novo

const Sidebar = () => (
    <SidebarContainer>
        <img src="https://github.com/TAYLUNGpgrm.png" alt="TAYLUNGpgrm-Perfil" />
        <Titulo fontSize={20}>Álef Dutra</Titulo>
    </SidebarContainer>
)

export default Sidebar
