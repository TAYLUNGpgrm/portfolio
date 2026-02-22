import styled from "styled-components"

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;
  justify-content: center; /* Garante centralização se a imagem for menor que a tela */

  img {
      height: auto;     /* Remove a trava de altura */
      width: 80%;      /* Força a imagem a ocupar 100% da largura do pai */
      max-width: 100%;  /* Garante que ela não ultrapasse o limite */
      object-fit: contain; /* Mantém a proporção sem cortar nada */

    @media (max-width: 768px) {
      height: auto;     /* Remove a trava de altura */
      width: 100%;      /* Força a imagem a ocupar 100% da largura do pai */
      max-width: 100%;  /* Garante que ela não ultrapasse o limite */
      object-fit: contain; /* Mantém a proporção sem cortar nada */
    }
  }

  @media (max-width: 768px) {
    display: block;    /* No mobile, removemos o flex para evitar problemas de alinhamento */
    width: 100%;       /* O container das estatísticas ocupa a tela toda */
  }
`
