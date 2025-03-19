import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"; // Importando styled-components

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

// Estilos
const PageContainer = styled.div`
  background-color: #fff; /* Fundo branco para a página inteira */
  flex: 1;
  padding: 20px; /* Espaçamento ao redor do conteúdo */
  color: #333; /* Cor do texto para garantir visibilidade */
  width: auto;
`;

const SectionContainer = styled.div`
  flex: 1;
  margin-bottom: 32px;
  background-color: #fff; /* Fundo branco para os componentes */
  padding: 20px; /* Adiciona espaçamento interno */
  border-radius: 8px; /* Bordas arredondadas */
`;

const SectionTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  color: #333; /* Cor do texto */
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MediaContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden; /* Impede o scroll na tela inteira */
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Evita o overflow do conteúdo dentro do modal */

  img,
  iframe,
  video {
    max-width: 900px;
    max-height: 900px;
    object-fit: contain; /* Mantém a proporção das imagens e vídeos */
  }
`;

const Media = styled.div`
  width: 250px;
  height: 400px;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  background-color: #000;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* Adiciona sombra ao passar o mouse */
  }

  img,
  video,
  iframe {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Para as imagens e vídeos da galeria */
  }
`;

// Estilo para o título e descrição do projeto
const ProjectTitle = styled.h1`
  font-size: 28px;
  color: #333;
  max-width: 800px; /* Limita a largura do título */
  margin: 0 auto 20px; /* Centraliza o título com uma margem inferior */
  text-align: center; /* Centraliza o título */
`;

const ProjectDescription = styled.p`
  font-size: 1.5rem;
  color: ${colors.descriptionText};
  margin-bottom: 12px;
  font-family: ${fonts.secondary};

  max-width: 1500px; /* Limita a largura da descrição */
  margin: 0 auto;
  line-height: 1.3; /* Aumenta a altura da linha para tornar o texto mais legível */
  text-align: left;
`;

const LinksSection = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const LinkButton = styled.a`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProjectPage = () => {
  const { id } = useParams(); // Pega o id do projeto a partir da URL

  const project = {
    1: {
      title: "Redgtech Automação",
      description: `Desenvolvi um aplicativo híbrido (Android/iOS) utilizando React Native, com o objetivo de proporcionar um controle eficiente e prático de placas de automação. Esse sistema é projetado para gerenciar dispositivos como lâmpadas, portões, níveis de água e outros dispositivos em prédios residenciais e comerciais. Além disso, criei uma página web intuitiva para o gerenciamento completo do sistema, permitindo aos usuários configurar e monitorar facilmente suas automações.`,
      images: [
        "https://redgtech.com.br/wp-content/uploads/2020/04/IMG_5825.png",
        "https://redgtech.com.br/wp-content/uploads/2020/03/WhatsApp-Image-2023-02-18-at-07.41.59.jpeg",
        "https://redgtech.com.br/wp-content/uploads/2020/03/IMG_3939.png",
        "https://redgtech.com.br/wp-content/uploads/2020/02/WhatsApp-Image-2023-10-13-at-14.01.34-scaled.jpeg",
        "https://redgtech.com.br/wp-content/uploads/2023/01/landing-page-1024x600.png",
        "https://redgtech.com.br/wp-content/uploads/2020/02/IMG-20220608-WA0020.jpg",
        "/monitoring.png",
      ],
      videos: [
        "https://www.youtube.com/watch?v=Ni0x-BoSiqY",
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6987094896239087617?compact=1", // Adicionando o vídeo do LinkedIn
      ],
      links: {
        website: "https://redgtech.com.br",
        playStore:
          "https://play.google.com/store/apps/details?id=com.redgtech&hl=pt_BR",
        appleStore:
          "https://apps.apple.com/br/app/redgtech-automa%C3%A7%C3%A3o/id1565631105",
      },
    },
    2: {
      title: "Intelbras",
      description: `Desenvolvimento da página web que funciona para o controle de funcionalidades dos roteadores Intelbras onde o usuário pode ter total controle
sobre a distribuição de banda e conectividade wi-fi do seu roteador assim foram atualizados 1.335 dispositivos com essa melhoria`,
      images: [
        "https://i.ytimg.com/vi/vQiBfxDbWVI/maxresdefault.jpg",
        "/intelbras1.png",
        "/intelbras2.png",
        "/intelbras3.png",
      ],
      videos: [
        "https://www.youtube.com/watch?v=vQiBfxDbWVI",
        "https://www.youtube.com/watch?v=A3gUETqQGrw",
      ],

      links: {
        website: "https://thummi.global/",
        playStore:
          "https://play.google.com/store/apps/details?id=com.thummi&hl=pt_PT",
        appleStore: "https://apps.apple.com/br/app/thummi/id1581842785",
      },
    },
    3: {
      title: "Thummi",
      description:
        "Na página de monitoramento, implementei atualizações importantes para facilitar a visualização de dados médicos e o acompanhamento do progresso no tratamento. Agora, os pacientes e profissionais de saúde podem acessar informações vitais de forma mais ágil e organizada, com recursos adicionais para personalização de relatórios e alertas.",
      images: [
        "https://www.boqnews.com/wp-content/uploads/2021/10/thummi-2.png",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/07/3f/25/073f255b-99e4-571b-f7e5-81d468be66b6/666331d4-6d16-40de-b595-e26cf764b8ac_Menu.png/300x0w.jpg",
        "https://thummi.global/wp-content/uploads/2021/08/iPhone-15-Pro.png",
      ],
      videos: [
        "http://thummi.global/wp-content/uploads/2023/12/home_thummi_desktop.mp4",
        "https://www.youtube.com/watch?v=MPL9LW6Ifw4",
      ],

      links: {
        website: "https://thummi.global/",
        playStore:
          "https://play.google.com/store/apps/details?id=com.thummi&hl=pt_PT",
        appleStore: "https://apps.apple.com/br/app/thummi/id1581842785",
      },
    },
  };
  const projectData = project[id];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isVideo, setIsVideo] = useState(false);

  const handleMediaClick = (url, type) => {
    setModalContent(url);
    setIsVideo(type === "video");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const renderVideo = (url) => {
    if (url.includes("youtube.com")) {
      const videoId = url.split("v=")[1];
      return (
        <iframe
          title="YouTube Video"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          scrolling="no"
        />
      );
    }
    if (url.includes("linkedin.com")) {
      return (
        <iframe
          src={url}
          height="399"
          width="504"
          frameBorder="0"
          allowFullScreen
          title="Publicação incorporada"
          scrolling="no"
        />
      );
    }
    return <video src={url} controls autoPlay />;
  };

  if (!projectData) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <PageContainer>
      <ProjectTitle>{projectData.title}</ProjectTitle>
      <ProjectDescription>{projectData.description}</ProjectDescription>

      {/* Seção de Imagens */}
      <SectionContainer>
        <SectionTitle>Imagens</SectionTitle>
        <MediaContainer>
          {projectData.images.map((imageUrl, index) => (
            <Media
              key={index}
              onClick={() => handleMediaClick(imageUrl, "image")}
            >
              <img src={imageUrl} alt={`Imagem ${index + 1}`} />
            </Media>
          ))}
        </MediaContainer>
      </SectionContainer>

      {/* Seção de Vídeos */}
      <SectionContainer>
        <SectionTitle>Vídeos</SectionTitle>
        <MediaContainer>
          {projectData.videos.map((videoUrl, index) => (
            <Media
              key={index}
              onClick={() => handleMediaClick(videoUrl, "video")}
            >
              {renderVideo(videoUrl)}
            </Media>
          ))}
        </MediaContainer>
      </SectionContainer>

      {/* Seção de Links */}
      <LinksSection>
        <LinkButton href={projectData.links.website} target="_blank">
          Site
        </LinkButton>
        <LinkButton href={projectData.links.playStore} target="_blank">
          Play Store
        </LinkButton>
        <LinkButton href={projectData.links.appleStore} target="_blank">
          Apple Store
        </LinkButton>
      </LinksSection>

      {/* Modal para exibir a mídia expandida */}
      {isModalOpen && (
        <Modal onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {isVideo ? (
              renderVideo(modalContent)
            ) : (
              <img src={modalContent} alt="Mídia Expandida" />
            )}
          </ModalContent>
        </Modal>
      )}
    </PageContainer>
  );
};
export default ProjectPage;
