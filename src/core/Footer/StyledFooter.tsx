import styled from 'styled-components'

export const MyFooter = styled.footer`
  margin-top: auto;
  width: 100%;
  background: #626D71;
  text-align: center;
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
  }
`

export const SocialIconRef = styled.a`
  color: #333;
  margin: 0 5px;
  font-size: 18px;
`