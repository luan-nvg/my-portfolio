import styled from "styled-components"
import { Link } from "react-router-dom"
import { theme } from "../../styles/theme"

const { colors, fonts, layout, radius } = theme

export const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${colors.bg};
  color: ${colors.dark};
  font-family: ${fonts.body};
`

export const Nav = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(247, 246, 242, 0.94);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid ${colors.border};
`

export const NavInner = styled.div`
  max-width: ${layout.maxWidth};
  margin: 0 auto;
  padding: 0 1.5rem;
  height: ${layout.navHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const Brand = styled(Link)`
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.dark};
  text-decoration: none;
  letter-spacing: -0.02em;

  &:hover {
    color: ${colors.accent};
  }
`

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.75rem;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${colors.muted};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${colors.dark};
  }
`

export const NavCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 1.1rem;
  border-radius: ${radius.sm};
  background: ${colors.accent};
  color: #fff;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, box-shadow 0.2s;

  &:hover {
    background: ${colors.accentHover};
    box-shadow: 0 4px 16px rgba(0, 102, 204, 0.28);
  }
`

export const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: ${colors.dark};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

export const MobilePanel = styled.div`
  display: none;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem 1.5rem 1.25rem;
  border-top: 1px solid ${colors.border};
  background: ${colors.bg};

  @media (max-width: 768px) {
    display: flex;
  }
`

export const MobileLink = styled(Link)`
  padding: 0.75rem 0;
  color: ${colors.dark};
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid ${colors.border};
`

export const MobileCta = styled.a`
  margin-top: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  border-radius: ${radius.sm};
  background: ${colors.accent};
  color: #fff;
  font-weight: 600;
  text-decoration: none;
`

export const Main = styled.main`
  flex: 1;
`

export const Footer = styled.footer`
  border-top: 1px solid ${colors.border};
  background: ${colors.surface};
  padding: 1.5rem;
`

export const FooterInner = styled.div`
  max-width: ${layout.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.875rem;
  color: ${colors.muted};

  p {
    margin: 0;
  }
`

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;

  a {
    color: ${colors.muted};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${colors.accent};
    }
  }
`
