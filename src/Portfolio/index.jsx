import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaArrowRight } from "react-icons/fa"
import * as S from "./styles"

const SKILLS = [
  "React",
  "React Native",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "Next.js",
  "IoT",
  "APIs REST"
]

const PROJECTS = [
  {
    title: "Magazine Luiza · E-commerce",
    description:
      "Contribuo no e-commerce com Next.js — performance, SEO e ferramenta de templates que acelera a publicação de páginas pelo time.",
    link: "/project/7",
    imageUrl: "/magalu-site-home-live.png",
    imageFit: "contain"
  },
  {
    title: "Prodgius Hub",
    description:
      "Desenvolvi o Hub de estoque, PDV, Kanban e gestão operacional. React, Node.js e MongoDB, com layout mobile-first.",
    link: "/project/4",
    imageUrl: "/prodgius-hub-landing.png",
    imageFit: "contain"
  },
  {
    title: "Coopera · FCG Edu",
    description:
      "Desenvolvi app iOS e portal web para cadastro e candidatura a vagas — conectando alunos e empresas de Capim Grosso.",
    link: "/project/8",
    imageUrl: "/coopera-app-home.jpg",
    imageFit: "contain"
  },
  {
    title: "SESI · Pagamentos Cielo",
    description:
      "Contribuí no app de pagamentos do SESI com integração Cielo — fluxo de títulos, confirmação na maquineta e recibo no balcão.",
    link: "/project/5",
    imageUrl: "/sesi-maquineta.png",
    imageFit: "contain"
  },
  {
    title: "MoneyPag",
    description:
      "Atuei no app mobile da fintech — fluxos de pagamento, recargas e integração com cartão Elo.",
    link: "/project/6",
    imageUrl: "/moneypag-app.jpg",
    imageFit: "contain"
  },
  {
    title: "Redgtech Automação",
    description:
      "Desenvolvi app híbrido (React Native) e painel web para controle de automação residencial e comercial via IoT.",
    link: "/project/1",
    imageUrl: "/redgtech-card.png"
  },
  {
    title: "Intelbras",
    description:
      "Atuei na interface web embarcada dos roteadores — banda, Wi-Fi e conectividade em mais de 1.300 dispositivos.",
    link: "/project/2",
    imageUrl: "/intelbras-card.png"
  },
  {
    title: "Thummi",
    description:
      "Implementei melhorias no monitoramento oncológico remoto: visualização de dados, relatórios e alertas para pacientes e equipes.",
    link: "/project/3",
    imageUrl: "/thummi-card.png"
  }
]

export default function Portfolio() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (!hash) return
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" })
    })
  }, [])

  const copyEmail = async () => {
    const email = "luan.dev97@gmail.com"
    try {
      await navigator.clipboard.writeText(email)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <S.Page>
      <S.Hero id="inicio">
        <S.HeroBg />
        <S.HeroGrid />
        <S.HeroInner>
          <S.HeroSplit>
            <S.HeroContent>
              <S.HeroTag>Desenvolvedor full-stack</S.HeroTag>
              <S.HeroTitle>Luan Cerqueira</S.HeroTitle>
              <S.HeroSubtitle>
                Tenho 10 anos construindo produtos web, mobile e IoT. Busco times
                que valorizam código claro, entrega consistente e produto que
                funciona no dia a dia do usuário.
              </S.HeroSubtitle>
              <S.HeroActions>
                <S.PrimaryBtn href="#projetos">
                  Ver projetos <FaArrowRight size={14} />
                </S.PrimaryBtn>
                <S.GhostBtn href="#contato">Falar comigo</S.GhostBtn>
              </S.HeroActions>
              <S.StatsRow>
                <S.StatCard>
                  <S.StatValue>10+</S.StatValue>
                  <S.StatLabel>anos de experiência</S.StatLabel>
                </S.StatCard>
                <S.StatCard>
                  <S.StatValue>Web</S.StatValue>
                  <S.StatLabel>React · Node · APIs</S.StatLabel>
                </S.StatCard>
                <S.StatCard>
                  <S.StatValue>Mobile</S.StatValue>
                  <S.StatLabel>React Native · iOS/Android</S.StatLabel>
                </S.StatCard>
                <S.StatCard>
                  <S.StatValue>IoT</S.StatValue>
                  <S.StatLabel>automação e integrações</S.StatLabel>
                </S.StatCard>
              </S.StatsRow>
            </S.HeroContent>

            <S.HeroVisual>
              <S.HeroPhotoFrame>
                <S.HeroPhoto src="/my-photo.png" alt="Luan Cerqueira" />
              </S.HeroPhotoFrame>
            </S.HeroVisual>
          </S.HeroSplit>
        </S.HeroInner>
      </S.Hero>

      <S.SectionAlt id="sobre">
        <S.SectionInner>
          <S.SectionHead>
            <S.SectionTag>Sobre</S.SectionTag>
            <S.SectionTitle>Quem sou e como trabalho</S.SectionTitle>
            <S.SectionLead>
              Tenho trajetória em financeiro, varejo, saúde e IoT — gosto de
              ficar próximo do produto e do time.
            </S.SectionLead>
          </S.SectionHead>

          <S.AboutBody>
            <S.AboutText>
              Trabalho há mais de 10 anos com React, React Native, Node.js e
              MongoDB. Atualmente atuo no e-commerce da Magazine Luiza, com
              Next.js, performance, acessibilidade e SEO. Já integrei squads em
              projetos para Banco do Brasil, Banco Original e MoneyPag. Na
              Redgtech Automação, desenvolvi o ecossistema IoT — app mobile,
              APIs e painel web. Na Prodgius, desenvolvi o Hub de estoque, PDV
              e gestão operacional, com foco em arquitetura front-end, APIs e
              experiência mobile-first.
            </S.AboutText>
            <S.SkillList>
              {SKILLS.map((skill) => (
                <S.SkillChip key={skill}>{skill}</S.SkillChip>
              ))}
            </S.SkillList>
          </S.AboutBody>
        </S.SectionInner>
      </S.SectionAlt>

      <S.Section id="projetos">
        <S.SectionInner>
          <S.SectionHead>
            <S.SectionTag>Portfólio</S.SectionTag>
            <S.SectionTitle>Experiências profissionais</S.SectionTitle>
            <S.SectionLead>
              Empresas e produtos em que atuei — minha participação incluiu
              novos fluxos, correções e melhorias em produção, do mobile ao
              back-end.
            </S.SectionLead>
          </S.SectionHead>

          <S.ProjectGrid>
            {PROJECTS.map((project, index) => (
              <S.ProjectCard
                key={project.link}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <S.ProjectImageWrap>
                  <S.ProjectImage
                    src={project.imageUrl}
                    alt={project.title}
                    $fit={project.imageFit}
                  />
                </S.ProjectImageWrap>
                <S.ProjectBody>
                  <S.ProjectTitle>{project.title}</S.ProjectTitle>
                  <S.ProjectDesc>{project.description}</S.ProjectDesc>
                  <S.ProjectLink to={project.link}>
                    Ver detalhes <FaArrowRight size={12} />
                  </S.ProjectLink>
                </S.ProjectBody>
              </S.ProjectCard>
            ))}
          </S.ProjectGrid>
        </S.SectionInner>
      </S.Section>

      <S.SectionAlt id="contato">
        <S.SectionInner>
          <S.SectionHead>
            <S.SectionTag>Contato</S.SectionTag>
            <S.SectionTitle>Vamos conversar?</S.SectionTitle>
            <S.SectionLead>
              Estou aberto a oportunidades full-stack, front-end ou mobile.
              Respondo por e-mail, WhatsApp ou LinkedIn.
            </S.SectionLead>
          </S.SectionHead>

          <S.ContactGrid>
            <S.ToastWrap>
              <AnimatePresence>
                {showToast && (
                  <S.Toast
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                  >
                    E-mail copiado!
                  </S.Toast>
                )}
              </AnimatePresence>
              <S.ContactCardButton
                type="button"
                onClick={copyEmail}
                whileTap={{ scale: 0.98 }}
              >
                <S.ContactIcon>
                  <FaEnvelope />
                </S.ContactIcon>
                <S.ContactMeta>
                  <S.ContactLabel>E-mail</S.ContactLabel>
                  <S.ContactValue>luan.dev97@gmail.com</S.ContactValue>
                </S.ContactMeta>
              </S.ContactCardButton>
            </S.ToastWrap>

            <S.ContactCard
              href="https://wa.me/5571985439973"
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.98 }}
            >
              <S.ContactIcon>
                <FaWhatsapp />
              </S.ContactIcon>
              <S.ContactMeta>
                <S.ContactLabel>WhatsApp</S.ContactLabel>
                <S.ContactValue>(71) 9 8543-9973</S.ContactValue>
              </S.ContactMeta>
            </S.ContactCard>

            <S.ContactCard
              href="https://www.linkedin.com/in/luanscerqueira/"
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.98 }}
            >
              <S.ContactIcon>
                <FaLinkedin />
              </S.ContactIcon>
              <S.ContactMeta>
                <S.ContactLabel>LinkedIn</S.ContactLabel>
                <S.ContactValue>/in/luanscerqueira</S.ContactValue>
              </S.ContactMeta>
            </S.ContactCard>
          </S.ContactGrid>
        </S.SectionInner>
      </S.SectionAlt>
    </S.Page>
  )
}
