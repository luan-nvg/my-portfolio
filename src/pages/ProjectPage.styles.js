import styled from "styled-components"
import { Link } from "react-router-dom"
import { theme } from "../styles/theme"

const { colors, layout, radius, shadow } = theme

export const Page = styled.div`
  padding: 2rem 1.5rem 4rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem 3rem;
  }
`

export const Inner = styled.div`
  max-width: ${layout.maxWidth};
  margin: 0 auto;
`

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 2rem;
  color: ${colors.muted};
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${colors.accent};
  }
`

export const Header = styled.header`
  margin-bottom: 2.5rem;
  max-width: 42rem;
`

export const Tag = styled.span`
  display: inline-block;
  margin-bottom: 0.75rem;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background: ${colors.accentLight};
  color: ${colors.accent};
  font-size: 0.78rem;
  font-weight: 600;
`

export const Title = styled.h1`
  margin: 0 0 1rem;
  font-size: clamp(1.85rem, 4vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${colors.dark};
`

export const Description = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${colors.muted};
`

export const Block = styled.section`
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  border-radius: ${radius.lg};
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  box-shadow: ${shadow.card};
`

export const BlockTitle = styled.h2`
  margin: 0 0 1.25rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.dark};
`

export const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
`

export const ImageItem = styled.button`
  min-height: 220px;
  padding: 0.5rem;
  border: 1px solid ${colors.border};
  border-radius: ${radius.md};
  background: #eef2f6;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;

  img {
    width: 100%;
    height: auto;
    max-height: 420px;
    object-fit: contain;
    display: block;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 102, 204, 0.35);
    box-shadow: ${shadow.card};
  }
`

export const MediaItem = styled.button`
  aspect-ratio: ${({ $short }) => ($short ? "9 / 16" : "16 / 10")};
  max-width: ${({ $short }) => ($short ? "220px" : "none")};
  padding: 0;
  border: 1px solid ${colors.border};
  border-radius: ${radius.md};
  background: #000;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 102, 204, 0.35);
    box-shadow: ${shadow.card};
  }
`

export const VideoPreview = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const PlayBadge = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.35);
  pointer-events: none;
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`

export const ActionBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.75rem 1.2rem;
  border-radius: ${radius.sm};
  background: ${colors.accent};
  color: #fff;
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: none;
  transition: background 0.2s, box-shadow 0.2s;

  &:hover {
    background: ${colors.accentHover};
    box-shadow: 0 6px 20px rgba(0, 102, 204, 0.22);
  }
`

export const ActionGhost = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.2rem;
  border-radius: ${radius.sm};
  border: 1px solid ${colors.border};
  background: ${colors.surface};
  color: ${colors.dark};
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: none;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${colors.accent};
    color: ${colors.accent};
  }
`

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(29, 31, 42, 0.88);
  backdrop-filter: blur(4px);
`

export const ModalContent = styled.div`
  max-width: min(960px, 100%);
  max-height: 90vh;
  border-radius: ${radius.md};
  overflow: hidden;
  background: #000;

  img,
  iframe,
  video {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    display: block;
    margin: 0 auto;
    vertical-align: middle;
  }
`

export const NotFound = styled.p`
  margin: 0 0 1rem;
  color: ${colors.muted};
`
