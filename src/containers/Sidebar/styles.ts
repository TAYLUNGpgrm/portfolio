import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinhamento padrão no desktop */

  img {
    width: 100%; /* No desktop ele segue o container de 128px */
    height: auto;
    display: block;
    margin-bottom: 24px;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    align-items: center; /* Centraliza imagem e texto no mobile */
    margin-bottom: 40px;

    img {
      width: 180px; /* Aumenta o tamanho da foto de perfil no mobile */
      margin-bottom: 16px;
    }
  }
`;
