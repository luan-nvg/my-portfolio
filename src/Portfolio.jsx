import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

// Definir fontes e cores
const fonts = {
  primary: "'Roboto', sans-serif",
  secondary: "'Poppins', sans-serif",
};

const colors = {
  primary: "#007bff",
  secondary: "#0056b3",
  text: "black",
  descriptionText: "#666",
};

const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin: 0;
  place-items: center;
  min-width: 320px;
  font-family: ${fonts.primary};
`;

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
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`;

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
`;

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
`;

const PortfolioSection = styled.section`
  width: 100%;
  text-align: center;
  background-color: ${colors.background};
  place-items: center;
`;

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
`;

const Subtitle = styled.h3`
  font-size: 1.2rem;
  color: ${colors.descriptionText};
  margin-bottom: 5px;
  font-family: ${fonts.secondary};
  max-width: 1500px; /* Limita a largura da descrição */
  margin: 0 auto;
  line-height: 1.3; /* Aumenta a altura da linha para tornar o texto mais legível */
  text-align: left;
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 35px;
  margin-bottom: 5px;
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

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
`;

const projects = [
  {
    title: "Redgtech",
    description:
      "A Redgtech Automação oferece produtos que atendem a diversos acionamentos, proporcionando praticidade em automação residencial e comercial.",
    link: "/project/1",
    imageUrl:
      "https://redgtech.com.br/wp-content/uploads/2023/01/landing-page-1024x600.png",
  },
  {
    title: "Intelbras",
    description:
      "Oferecemos soluções completas e com tecnologias inovadoras para resolver problemas e melhorar o dia a dia de empresas, trazendo-as para o futuro.",
    link: "/project/2",
    imageUrl:
      "https://s.zst.com.br/cms-assets/2021/12/roteador-intelbras-bom.webp",
  },
  {
    title: "Thummi",
    description:
      "Plataforma de monitoramento remoto do paciente oncológico para maior assertividade ao tratamento. Fundada por médicos oncologistas com ampla experiência na área.",
    link: "/project/3",
    imageUrl:
      "https://scontent.ffec1-1.fna.fbcdn.net/v/t39.30808-6/349015404_3330929823884361_8313608828649143719_n.png?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeE1O6LkWSpG18IkOubudXtiq_hR6WVRV6yr-FHpZVFXrMcagvRlLhlh3kWYb4ZT1EnH8L11UOH5qi8ppdY6HXGi&_nc_ohc=5Dhdll-QbmAQ7kNvgH2daoa&_nc_oc=AdlCiahKnk3SQbxsVUbaaiSSnrHgR36SL0ycK3tQmNlbkRAhOGXVxdG2onN6d0Zm3os&_nc_zt=23&_nc_ht=scontent.ffec1-1.fna&_nc_gid=EGKztXycmDHEKBmqNVP3lA&oh=00_AYF9G_WyLJ75b2RoYdeJZqGan432H9jYu1YKbf-Rs4vVcQ&oe=67E0D6FA",
  },
];

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
            financeiro, iintegrei equipes de desenvolvimento para cliente como
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
  );
}
