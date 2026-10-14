import { buscarArtes } from "../firebase/artes"
import { buscarApoiadores, buscarArtistas } from "../firebase/apoiadores"

function escapeHtml(value: string): string {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;")
}

function renderCard(avatar: string, nome: string, descricao: string): string {
    return `<div class="card firebase-card">
        <img src="${escapeHtml(avatar)}" alt="${escapeHtml(nome)}">
        <div class="card-content">
            <h2>${escapeHtml(nome)}</h2>
            <p>${escapeHtml(descricao)}</p>
        </div>
    </div>`
}

export async function atualizarApoiadores(selector: string): Promise<void> {
    const container = document.querySelector<HTMLElement>(selector)
    if (!container) return

    const apoiadores = await buscarApoiadores()
    container.innerHTML = apoiadores
        .map((apoiador) => renderCard(apoiador.avatar, apoiador.nome, apoiador.descrição))
        .join("")
}

export async function atualizarDestaques(selector: string): Promise<void> {
    const container = document.querySelector<HTMLElement>(selector)
    if (!container) return

    const apoiadores = await buscarApoiadores()
    const destaques = [
        {
            id: "1369726597162205317",
            descricao: "Acesse nosso repositório e organização no GitHub! Confira nossos projetos e wallpapers da comunidade.",
            link: "https://github.com/murof-republic"
        },
        {
            id: "1370119246276726944",
            descricao: "Tenha ferramentas para administração, interação e entretenimento, tudo em um só lugar.",
            link: "https://github.com/murof-republic/snuf"
        }
    ]

    container.innerHTML = destaques.map((destaque) => {
        const apoiador = apoiadores.find((item) => item.id === destaque.id)
        if (!apoiador) return ""

        return `<div class="card firebase-card fixed" data-link="${escapeHtml(destaque.link)}">
            <img src="${escapeHtml(apoiador.avatar)}" alt="${escapeHtml(apoiador.nome)}">
            <div class="card-content">
                <h2>${escapeHtml(apoiador.nome)}</h2>
                <p>${escapeHtml(destaque.descricao)}</p>
            </div>
        </div>`
    }).join("")

    container.querySelectorAll<HTMLElement>("[data-link]").forEach((card) => {
        card.addEventListener("click", () => window.open(card.dataset.link, "_blank"))
    })
}

export async function atualizarArtistas(selector: string): Promise<void> {
    const container = document.querySelector<HTMLElement>(selector)
    if (!container) return

    const artistas = await buscarArtistas()
    container.innerHTML = artistas
        .map((artista) => renderCard(artista.avatar, artista.nome, artista.descrição))
        .join("")
}

export async function atualizarArtes(selector: string): Promise<void> {
    const container = document.querySelector<HTMLElement>(selector)
    if (!container) return

    const artes = await buscarArtes()
    container.innerHTML = artes
        .map((arte) => `<div class="card firebase-art-card">
            <img src="${escapeHtml(arte.url)}" alt="${escapeHtml(arte.nome)}" data-modal-image>
            <div class="overlay">
                <h4>${escapeHtml(arte.nome)}</h4>
                <p>${escapeHtml(arte.autor)}</p>
            </div>
        </div>`)
        .join("")
}