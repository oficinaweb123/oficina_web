/* =========================================================
   1. INICIALIZAÇÃO DE ÍCONES
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initTheme();
});

/* =========================================================
   2. GERENCIADOR DE TEMA (MODO CLARO / MODO ESCURO)
   ========================================================= */
function toggleTheme() {
    const htmlEl = document.documentElement;
    const isDark = htmlEl.classList.contains('dark');
    
    if (isDark) {
        htmlEl.classList.remove('dark');
        localStorage.setItem('oficina_web_theme', 'light');
        updateThemeUI(false);
    } else {
        htmlEl.classList.add('dark');
        localStorage.setItem('oficina_web_theme', 'dark');
        updateThemeUI(true);
    }
}

function updateThemeUI(isDark) {
    const icon = document.getElementById('themeIcon');
    const text = document.getElementById('themeText');
    
    if (isDark) {
        icon.setAttribute('data-lucide', 'sun');
        text.textContent = 'MODO CLARO';
    } else {
        icon.setAttribute('data-lucide', 'moon');
        text.textContent = 'MODO ESCURO';
    }
    lucide.createIcons();
}

function initTheme() {
    const savedTheme = localStorage.getItem('oficina_web_theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
        updateThemeUI(false);
    } else {
        document.documentElement.classList.add('dark');
        updateThemeUI(true);
    }
}

/* =========================================================
   3. GERENCIADOR DOS MODAIS DE SERVIÇOS
   ========================================================= */
const serviceData = {
    curriculos: {
        title: "Currículos Digitais",
        badge: "DESTAQUE SEU TALENTO",
        description: "Desenvolvemos páginas web profissionais e interativas que substituem o currículo tradicional em PDF com elegância e modernidade.",
        features: [
            "✔ Link exclusivo e responsivo para recrutadores",
            "✔ Botões de contato direto (WhatsApp e LinkedIn)",
            "✔ Seção de portfólio de habilidades e projetos",
            "✔ Otimizado para leitura rápida"
        ],
        msg: "Olá! Gostaria de saber mais sobre o serviço de Currículos Digitais da Oficina Web."
    },
    sites: {
        title: "Sites & Portfólios",
        badge: "MOSTRE SEU TRABALHO",
        description: "Criamos sites completos, modernos e de alta velocidade para profissionais liberais, freelancers e empresas.",
        features: [
            "✔ Design exclusivo e adaptado para celular",
            "✔ Otimização para buscadores (SEO)",
            "✔ Formulários de contato integrados",
            "✔ Estrutura moderna e de alta velocidade"
        ],
        msg: "Olá! Gostaria de um orçamento para criação de Sites & Portfólios na Oficina Web."
    },
    corporativo: {
        title: "Soluções Corporativas",
        badge: "TECNOLOGIA SOB MEDIDA",
        description: "Sistemas web e landing pages focadas em conversão e automação para empresas que buscam escalar resultados no digital.",
        features: [
            "✔ Landing pages de alta conversão de vendas",
            "✔ Arquitetura de software escalável",
            "✔ Integração com APIs e ferramentas de gestão",
            "✔ Suporte técnico especializado"
        ],
        msg: "Olá! Tenho interesse em Soluções Corporativas da Oficina Web para minha empresa."
    }
};

function openModal(key) {
    const data = serviceData[key];
    if(!data) return;

    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalBadge').textContent = data.badge;
    document.getElementById('modalDescription').textContent = data.description;
    
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    data.features.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        featuresList.appendChild(li);
    });

    const waBtn = document.getElementById('modalWhatsappBtn');
    waBtn.href = `https://wa.me/?text=${encodeURIComponent(data.msg)}`;

    const modal = document.getElementById('serviceModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

/* Fechar modal clicando fora dele */
window.addEventListener('click', (e) => {
    const modal = document.getElementById('serviceModal');
    if (e.target === modal) {
        closeModal();
    }
});