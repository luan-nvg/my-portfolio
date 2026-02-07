import React, { useState } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { FaWhatsapp, FaEnvelope } from "react-icons/fa"

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

const ContactSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column; /* Altera a direção para coluna em telas pequenas */
    align-items: center;
    gap: 20px;
  }
`

const ContactItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: ${colors.descriptionText};
  font-family: ${fonts.secondary};
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    justify-content: center;
  }
`

const EmailButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
`

const EmailButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  color: #d44638;
  font-family: ${fonts.secondary};
  font-size: 1.1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    border-color: #d44638;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    justify-content: center;
  }
`

const Toast = styled(motion.div)`
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  background: #4caf50;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  font-family: ${fonts.secondary};
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 1000;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: #4caf50;
  }

  @media (max-width: 768px) {
    bottom: calc(100% + 8px);
    font-size: 0.85rem;
    padding: 10px 16px;
  }
`

const WhatsAppLink = styled(ContactItem)`
  color: #25d366;

  &:hover {
    border-color: #25d366;
    color: #25d366;
  }
`

const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`

const ContactText = styled.span`
  font-weight: 500;
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
  },
  {
    title: "Prodgius",
    description:
      "Sistema inteligente de controle de estoque com IA para otimização automática de inventário, previsão de demanda e gestão inteligente de suprimentos para empresas.",
    link: "/project/4",
    imageUrl: "/Logoprodigius.png"
  }
]

export default function Portfolio() {
  const [showToast, setShowToast] = useState(false)

  const copyEmailToClipboard = async () => {
    const email = "luan.dev97@gmail.com"
    try {
      await navigator.clipboard.writeText(email)
      setShowToast(true)
      setTimeout(() => {
        setShowToast(false)
      }, 3000)
    } catch (err) {
      console.error("Erro ao copiar email:", err)
      alert("Erro ao copiar email. Por favor, copie manualmente: " + email)
    }
  }

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
        <Title>Contatos</Title>
        <ContactSection>
          <EmailButtonWrapper>
            <AnimatePresence>
              {showToast && (
                <Toast
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  Copiado com sucesso!
                </Toast>
              )}
            </AnimatePresence>
            <EmailButton
              onClick={copyEmailToClipboard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactText>luan.dev97@gmail.com</ContactText>
            </EmailButton>
          </EmailButtonWrapper>
          <WhatsAppLink
            href="https://wa.me/5571985439973"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactIcon>
              <FaWhatsapp />
            </ContactIcon>
            <ContactText>(71) 9 8543-9973</ContactText>
          </WhatsAppLink>
        </ContactSection>
      </PortfolioSection>
    </div>
  )
}
