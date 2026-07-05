import { useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { FaLinkedin } from "react-icons/fa"
import * as S from "./styles"

const NAV_ITEMS = [
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" }
]

export default function PageLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/"

  const navHref = (sectionId) => (isHome ? `#${sectionId}` : `/#${sectionId}`)

  const closeMenu = () => setMenuOpen(false)

  return (
    <S.Root>
      <S.Nav>
        <S.NavInner>
          <S.Brand to="/" onClick={closeMenu}>
            Luan Cerqueira
          </S.Brand>

          <S.NavLinks>
            {NAV_ITEMS.map((item) => (
              <S.NavLink key={item.id} to={navHref(item.id)} onClick={closeMenu}>
                {item.label}
              </S.NavLink>
            ))}
            <S.NavCta
              href="https://www.linkedin.com/in/luanscerqueira/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </S.NavCta>
          </S.NavLinks>

          <S.MenuButton
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </S.MenuButton>
        </S.NavInner>

        {menuOpen && (
          <S.MobilePanel>
            {NAV_ITEMS.map((item) => (
              <S.MobileLink key={item.id} to={navHref(item.id)} onClick={closeMenu}>
                {item.label}
              </S.MobileLink>
            ))}
            <S.MobileCta
              href="https://www.linkedin.com/in/luanscerqueira/"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              LinkedIn
            </S.MobileCta>
          </S.MobilePanel>
        )}
      </S.Nav>

      <S.Main>
        <Outlet />
      </S.Main>

      <S.Footer>
        <S.FooterInner>
          <p>© {new Date().getFullYear()} Luan Cerqueira · Desenvolvedor full-stack</p>
          <S.FooterLinks>
            <a href="mailto:luan.dev97@gmail.com">luan.dev97@gmail.com</a>
            <a
              href="https://www.linkedin.com/in/luanscerqueira/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </S.FooterLinks>
        </S.FooterInner>
      </S.Footer>
    </S.Root>
  )
}
