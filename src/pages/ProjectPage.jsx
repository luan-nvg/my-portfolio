import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa"
import projectsData from "../data/projects.json"
import * as S from "./ProjectPage.styles"

function getYoutubeId(url) {
  if (url.includes("shorts/")) {
    return url.split("shorts/")[1]?.split("?")[0]?.split("/")[0]
  }
  if (url.includes("youtu.be/")) {
    return url.split("youtu.be/")[1]?.split("?")[0]
  }
  if (url.includes("v=")) {
    return url.split("v=")[1]?.split("&")[0]
  }
  return null
}

function isYoutubeShort(url) {
  return url.includes("shorts/")
}

function youtubeThumbnail(videoId) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
}

function renderVideoEmbed(url, autoplay = false) {
  const videoId = getYoutubeId(url)
  if (!videoId) return null

  const short = isYoutubeShort(url)
  const params = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    rel: "0",
    playsinline: "1",
    modestbranding: "1"
  })

  return (
    <iframe
      title="YouTube Video"
      src={`https://www.youtube.com/embed/${videoId}?${params}`}
      width={short ? 360 : 560}
      height={short ? 640 : 315}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ border: 0, maxWidth: "100%", background: "#000" }}
    />
  )
}

function renderVideoPreview(url) {
  const videoId = getYoutubeId(url)
  if (!videoId) return null

  return (
    <S.VideoPreview $short={isYoutubeShort(url)}>
      <img src={youtubeThumbnail(videoId)} alt="Preview do vídeo no YouTube" />
      <S.PlayBadge aria-hidden>▶</S.PlayBadge>
    </S.VideoPreview>
  )
}

function renderVideo(url, autoplay = false) {
  if (url.includes("youtube.com") || url.includes("youtu.be") || url.includes("youtube.")) {
    return autoplay ? renderVideoEmbed(url, true) : renderVideoPreview(url)
  }
  if (url.includes("linkedin.com")) {
    return (
      <iframe
        src={url}
        frameBorder="0"
        allowFullScreen
        title="Publicação incorporada"
      />
    )
  }
  return <video src={url} controls autoPlay />
}

export default function ProjectPage() {
  const { id } = useParams()
  const project = projectsData.find((item) => item.id === Number(id))

  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const [isVideo, setIsVideo] = useState(false)

  if (!project) {
    return (
      <S.Page>
        <S.Inner>
          <S.NotFound>Projeto não encontrado.</S.NotFound>
          <S.BackLink to="/">
            <FaArrowLeft /> Voltar ao portfólio
          </S.BackLink>
        </S.Inner>
      </S.Page>
    )
  }

  const openMedia = (url, type) => {
    setModalContent(url)
    setIsVideo(type === "video")
    setModalOpen(true)
  }

  return (
    <S.Page>
      <S.Inner>
        <S.BackLink to="/#projetos">
          <FaArrowLeft /> Voltar aos projetos
        </S.BackLink>

        <S.Header>
          <S.Tag>Case</S.Tag>
          <S.Title>{project.title}</S.Title>
          <S.Description>{project.description}</S.Description>
        </S.Header>

        {project.images.length > 0 && (
          <S.Block>
            <S.BlockTitle>Imagens</S.BlockTitle>
            <S.MediaGrid>
              {project.images.map((imageUrl, index) => (
                <S.ImageItem
                  key={imageUrl}
                  type="button"
                  onClick={() => openMedia(imageUrl, "image")}
                >
                  <img src={imageUrl} alt={`${project.title} — captura ${index + 1}`} />
                </S.ImageItem>
              ))}
            </S.MediaGrid>
          </S.Block>
        )}

        {project.videos.length > 0 && (
          <S.Block>
            <S.BlockTitle>Vídeos</S.BlockTitle>
            <S.MediaGrid>
              {project.videos.map((videoUrl) => (
                <S.MediaItem
                  key={videoUrl}
                  type="button"
                  $short={isYoutubeShort(videoUrl)}
                  onClick={() => openMedia(videoUrl, "video")}
                >
                  {renderVideoPreview(videoUrl)}
                </S.MediaItem>
              ))}
            </S.MediaGrid>
          </S.Block>
        )}

        <S.Actions>
          {project.links.website && (
            <S.ActionBtn href={project.links.website} target="_blank" rel="noreferrer">
              {project.links.website.includes("youtube") ? "Ver demonstração" : "Site"}{" "}
              <FaExternalLinkAlt size={12} />
            </S.ActionBtn>
          )}
          {project.links.app && (
            <S.ActionBtn href={project.links.app} target="_blank" rel="noreferrer">
              Ver sistema <FaExternalLinkAlt size={12} />
            </S.ActionBtn>
          )}
          {project.links.playStore && (
            <S.ActionGhost href={project.links.playStore} target="_blank" rel="noreferrer">
              Play Store
            </S.ActionGhost>
          )}
          {project.links.appleStore && (
            <S.ActionGhost href={project.links.appleStore} target="_blank" rel="noreferrer">
              App Store
            </S.ActionGhost>
          )}
        </S.Actions>
      </S.Inner>

      {modalOpen && (
        <S.Modal onClick={() => setModalOpen(false)}>
          <S.ModalContent onClick={(event) => event.stopPropagation()}>
            {isVideo ? renderVideoEmbed(modalContent, true) : (
              <img src={modalContent} alt="Visualização ampliada" />
            )}
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Page>
  )
}
