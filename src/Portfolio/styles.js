import styled from "styled-components"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { theme } from "../styles/theme"

const { colors, fonts, layout, radius, shadow } = theme

export const Page = styled.div`
  overflow-x: hidden;
`

export const Hero = styled.section`
  position: relative;
  padding: 5rem 1.5rem 4rem;
  min-height: calc(100vh - ${layout.navHeight});
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 3.5rem 1.25rem 3rem;
  }
`

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 80% 60% at 70% 40%, rgba(0, 102, 204, 0.07) 0%, transparent 70%),
    radial-gradient(ellipse 50% 40% at 15% 75%, rgba(13, 159, 110, 0.05) 0%, transparent 60%);
`

export const HeroGrid = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(0, 102, 204, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 102, 204, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
`

export const HeroInner = styled.div`
  position: relative;
  max-width: ${layout.maxWidth};
  margin: 0 auto;
  width: 100%;
`

export const HeroSplit = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(240px, 320px);
  align-items: center;
  gap: clamp(2rem, 4vw, 3.5rem);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

export const HeroContent = styled.div`
  min-width: 0;
`

export const HeroVisual = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    order: -1;
  }
`

export const HeroPhotoFrame = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;
  padding: 0.65rem;
  border-radius: ${radius.xl};
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  box-shadow: ${shadow.card};

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(145deg, rgba(0, 102, 204, 0.35), rgba(13, 159, 110, 0.2));
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
  }
`

export const HeroPhoto = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center top;
  border-radius: calc(${radius.xl} - 6px);
`

export const HeroTag = styled.span`
  display: inline-block;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  background: ${colors.accentLight};
  color: ${colors.accent};
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
`

export const HeroTitle = styled.h1`
  margin: 0 0 1rem;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: ${colors.dark};
  max-width: 12ch;

  @media (max-width: 900px) {
    max-width: none;
  }
`

export const HeroSubtitle = styled.p`
  margin: 0 0 2rem;
  max-width: 38rem;
  font-size: 1.08rem;
  line-height: 1.65;
  color: ${colors.muted};
`

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
`

export const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.35rem;
  border-radius: ${radius.sm};
  background: ${colors.accent};
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;

  &:hover {
    background: ${colors.accentHover};
    box-shadow: 0 8px 24px rgba(0, 102, 204, 0.25);
    transform: translateY(-1px);
  }
`

export const GhostBtn = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.85rem 1.35rem;
  border-radius: ${radius.sm};
  border: 1px solid ${colors.border};
  background: ${colors.surface};
  color: ${colors.dark};
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${colors.accent};
    box-shadow: ${shadow.card};
  }
`

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const StatCard = styled.div`
  padding: 1rem 1.1rem;
  border-radius: ${radius.md};
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid ${colors.border};
  backdrop-filter: blur(8px);
`

export const StatValue = styled.strong`
  display: block;
  font-size: 1.35rem;
  font-weight: 700;
  color: ${colors.accent};
  line-height: 1.2;
  margin-bottom: 0.2rem;
`

export const StatLabel = styled.span`
  font-size: 0.78rem;
  color: ${colors.muted};
  line-height: 1.35;
`

export const Section = styled.section`
  padding: 4.5rem 1.5rem;

  @media (max-width: 768px) {
    padding: 3.5rem 1.25rem;
  }
`

export const SectionAlt = styled(Section)`
  background: ${colors.surface};
  border-top: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
`

export const SectionInner = styled.div`
  max-width: ${layout.maxWidth};
  margin: 0 auto;
`

export const SectionHead = styled.div`
  margin-bottom: 2.5rem;
  max-width: 36rem;
`

export const SectionTag = styled.span`
  display: block;
  margin-bottom: 0.65rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${colors.accent};
`

export const SectionTitle = styled.h2`
  margin: 0 0 0.75rem;
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${colors.dark};
`

export const SectionLead = styled.p`
  margin: 0;
  color: ${colors.muted};
  line-height: 1.65;
  font-size: 1rem;
`

export const AboutBody = styled.div`
  max-width: 42rem;
`

export const AboutText = styled.p`
  margin: 0 0 1.5rem;
  font-size: 1.02rem;
  line-height: 1.7;
  color: ${colors.muted};
`

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const SkillChip = styled.span`
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  background: ${colors.accentLight};
  color: ${colors.dark};
  font-size: 0.82rem;
  font-weight: 500;
  border: 1px solid rgba(0, 102, 204, 0.12);
`

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`

export const ProjectCard = styled(motion.article)`
  display: flex;
  flex-direction: column;
  border-radius: ${radius.lg};
  background: ${colors.bg};
  border: 1px solid ${colors.border};
  overflow: hidden;
  transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadow.cardHover};
    border-color: rgba(0, 102, 204, 0.25);
  }
`

export const ProjectImageWrap = styled.div`
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #eef2f6;
  border-bottom: 1px solid ${colors.border};
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${({ $fit }) => $fit ?? "cover"};
  object-position: ${({ $fit }) => ($fit === "contain" ? "center" : "top center")};
`

export const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.25rem;
  gap: 0.75rem;
`

export const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.dark};
`

export const ProjectDesc = styled.p`
  margin: 0;
  flex: 1;
  font-size: 0.92rem;
  line-height: 1.55;
  color: ${colors.muted};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const ProjectLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.25rem;
  color: ${colors.accent};
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: ${colors.accentHover};
  }
`

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  max-width: 52rem;
`

export const ContactCard = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.35rem;
  border-radius: ${radius.md};
  background: ${colors.bg};
  border: 1px solid ${colors.border};
  text-decoration: none;
  color: ${colors.dark};
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  cursor: pointer;

  &:hover {
    border-color: ${colors.accent};
    box-shadow: ${shadow.card};
    transform: translateY(-2px);
  }
`

export const ContactCardButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1.25rem 1.35rem;
  border-radius: ${radius.md};
  background: ${colors.bg};
  border: 1px solid ${colors.border};
  text-align: left;
  color: ${colors.dark};
  font-family: ${fonts.body};
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  cursor: pointer;

  &:hover {
    border-color: ${colors.accent};
    box-shadow: ${shadow.card};
    transform: translateY(-2px);
  }
`

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: ${radius.sm};
  background: ${colors.accentLight};
  color: ${colors.accent};
  font-size: 1.15rem;
  flex-shrink: 0;
`

export const ContactMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;
`

export const ContactLabel = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${colors.muted};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`

export const ContactValue = styled.span`
  font-size: 0.95rem;
  font-weight: 500;
  word-break: break-word;
`

export const ToastWrap = styled.div`
  position: relative;
`

export const Toast = styled(motion.div)`
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: ${colors.success};
  color: #fff;
  padding: 0.55rem 1rem;
  border-radius: ${radius.sm};
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 8px 24px rgba(13, 159, 110, 0.25);
`
