import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaWhatsapp } from "react-icons/fa"

// Definir fontes e cores
const fonts = {
  primary: "'Roboto', sans-serif",
  secondary: "'Poppins', sans-serif"
}

const colors = {
  primary: "#007bff",
  secondary: "#0056b3",
  text: "black",
  descriptionText: "#666"
}

const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin: 0;
  place-items: center;
  min-width: 320px;
  font-family: ${fonts.primary};
`

const Card = styled(motion.div)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  width: 300px;
  font-family: ${fonts.secondary};
`

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`

const Description = styled.p`
  color: ${colors.descriptionText};
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  height: 8.5rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
`

const Button = styled(Link)`
  display: inline-block;
  background: ${colors.primary};
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s ease;
  margin-top: auto;
  font-family: ${fonts.secondary};
  &:hover {
    background: ${colors.secondary};
  }
`

const PortfolioSection = styled.section`
  width: 100%;
  text-align: center;
  background-color: ${colors.background};
  place-items: center;
`

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${colors.text};
  margin-bottom: 20px;
  font-family: ${fonts.secondary};
  font-weight: bold;
  text-align: center;
  max-width: 90%; // Limita a largura
  margin-left: auto;
  margin-right: auto; // Centraliza o título na tela
`

const Subtitle = styled.h3`
  font-size: 1.2rem;
  color: ${colors.descriptionText};
  margin-bottom: 5px;
  font-family: ${fonts.secondary};
  max-width: 1500px; /* Limita a largura da descrição */
  margin: 0 auto;
  line-height: 1.3; /* Aumenta a altura da linha para tornar o texto mais legível */
  text-align: left;

  @media (max-width: 768px) {
    text-align: center; /* Alinha o texto ao centro em telas pequenas */
  }
`

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 35px;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    margin-right: 0; /* Remove o espaço à direita da imagem em dispositivos móveis */
    margin-bottom: 20px; /* Adiciona um espaçamento inferior quando a imagem fica acima */
  }
`

const AboutSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column; /* Altera a direção para coluna em telas pequenas */
    align-items: center;
  }
`

const WhatsAppLink = styled.a`
  color: #25d366;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    text-decoration: underline;
  }
`

const projects = [
  {
    title: "Redgtech",
    description:
      "A Redgtech Automação oferece produtos que atendem a diversos acionamentos, proporcionando praticidade em automação residencial e comercial.",
    link: "/project/1",
    imageUrl: "/redgtech-card.png"
  },
  {
    title: "Intelbras",
    description:
      "Oferecemos soluções completas e com tecnologias inovadoras para resolver problemas e melhorar o dia a dia de empresas, trazendo-as para o futuro.",
    link: "/project/2",
    imageUrl: "/intelbras-card.png"
  },
  {
    title: "Thummi",
    description:
      "Plataforma de monitoramento remoto do paciente oncológico para maior assertividade ao tratamento. Fundada por médicos oncologistas com ampla experiência na área.",
    link: "/project/3",
    imageUrl: "/thummi-card.png"
  }
]

export default function Portfolio() {
  return (
    <div>
      <PortfolioSection>
        <Title>Oi, aqui é o Luan!</Title>

        <AboutSection>
          <ProfileImage src="my-photo.png" alt="Luan Santana Cerqueira" />

          <Subtitle>
            Sou desenvolvedor de software há 10 anos. Já criei soluções para
            aplicações web, mobile e IoT. Desenvolvo em React Native, React.js,
            Node.js e MongoDB. Tenho experiência em projetos do setor
            financeiro, integrei equipes de desenvolvimento para cliente como
            como Banco do Brasil, Banco Original e MoneyPag. Desenvolvi e
            implementei soluções IOT em um projeto pessoal na REDGTECH Automação
            que resultaram em um faturamento superior a R$ 1,5 milhão em vendas
            e mais de 1.500 clientes atendidos. Atualmente, lidero a equipe
            técnica de desenvolvimento de software neste projeto.
          </Subtitle>
        </AboutSection>
      </PortfolioSection>

      <PortfolioSection>
        <Title>Projetos que já desenvolvi</Title>
        <Container>
          {projects.map((project, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image src={project.imageUrl} alt={project.title} />
              <Description>{project.description}</Description>
              <Button to={project.link}>Ver Projeto</Button>
            </Card>
          ))}
        </Container>
      </PortfolioSection>

      <PortfolioSection>
        <Title>Contato</Title>
        <AboutSection>
          <Subtitle>
            Você pode entrar em contato comigo pelo e-mail{" "}
            <strong>luannnvg@gmail.com</strong> ou através do telefone
            <WhatsAppLink
              href="https://wa.me/5571985439973"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={20} /> (71) 9 8543-9973
            </WhatsAppLink>
          </Subtitle>
        </AboutSection>
      </PortfolioSection>
    </div>
  )
}
