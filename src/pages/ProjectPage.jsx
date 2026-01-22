import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"; // Importando styled-components
import projectsData from "../data/projects.json";

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
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* Adiciona sombra ao passar o mouse */
  }

  img,
  video,
  iframe {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain; /* Mantém a proporção das imagens e vídeos */
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
  const projectData = projectsData.find((project) => project.id === Number(id));

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
          style={{ width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%" }}
        />
      );
    }
    if (url.includes("linkedin.com")) {
      return (
        <iframe
          src={url}
          frameBorder="0"
          allowFullScreen
          title="Publicação incorporada"
          scrolling="no"
          style={{ width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%" }}
        />
      );
    }
    return <video src={url} controls autoPlay style={{ width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%" }} />;
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
        {projectData.links.playStore && (
          <LinkButton href={projectData.links.playStore} target="_blank">
            Play Store
          </LinkButton>
        )}
        {projectData.links.appleStore && (
          <LinkButton href={projectData.links.appleStore} target="_blank">
            Apple Store
          </LinkButton>
        )}
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
