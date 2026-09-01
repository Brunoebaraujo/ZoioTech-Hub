import { Sparkles } from 'lucide-react'
import { ZoioMark } from './ZoioMark'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={15} /> ECOSSISTEMA ZOIOTECH</div>
        <h1>Seu ecossistema em um só lugar</h1>
        <p>Acesse seus aplicativos, jogos, ferramentas e experimentos por uma única central.</p>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="hero-ring ring-one" />
        <div className="hero-ring ring-two" />
        <div className="hero-mark"><ZoioMark size={82} /></div>
      </div>
    </section>
  )
}
