// ======================
// CONFIGURAÇÃO
// ======================

const WEBHOOK_EDITOR = "https://discord.com/api/webhooks/1514432539245285456/Jwbtj1FwM4jYLkobq7po6wKFsF6kt-aRzuuxX13qTKjp1Xyy9M0U4x1DSCIjnEcMTcue";
const WEBHOOK_CLIENTE = "https://discord.com/api/webhooks/1514431843745796326/l_Hs5jvbG9qn6mdxj8t74YfXGM1BWQKZJneCLaZWWbtvdPyL38QIpKdSeFM_aD7c_FyR";

const CARGO_EDITOR = "<@&1512642746534461510>";
const CARGO_CLIENTE = "<@&1512646408489140396>";

// ======================
// NAVEGAÇÃO
// ======================

function abrirEditor() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("editorForm").classList.remove("hidden");
}

function abrirCliente() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("clienteForm").classList.remove("hidden");
}

function voltarHome() {
    document.getElementById("editorForm").classList.add("hidden");
    document.getElementById("clienteForm").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
}

// ======================
// PROCURANDO EDITOR
// ======================

async function enviarEditor(event) {

    event.preventDefault();

    const nome = document.getElementById("editorNome").value;
    const discord = document.getElementById("editorDiscord").value;
    const tipo = document.getElementById("editorTipo").value;
    const prazo = document.getElementById("editorPrazo").value;
    const orcamento = document.getElementById("editorOrcamento").value;
    const info = document.getElementById("editorInfo").value;

    const payload = {
        content: CARGO_EDITOR,
        embeds: [{
            title: "🔎 Procurando Editor",
            description: "Novo pedido enviado pelo site.",
            color: 10181046,

            fields: [
                {
                    name: "👤 Nome",
                    value: nome,
                    inline: true
                },
                {
                    name: "💬 Discord",
                    value: discord,
                    inline: true
                },
                {
                    name: "🎬 Tipo de Edição",
                    value: tipo,
                    inline: false
                },
                {
                    name: "⏱ Prazo",
                    value: prazo,
                    inline: true
                },
                {
                    name: "💰 Orçamento",
                    value: orcamento,
                    inline: true
                },
                {
                    name: "📝 Informações",
                    value: info || "Nenhuma informação adicional."
                }
            ],

            footer: {
                text: "Editor Hub • Sistema Automático"
            },

            timestamp: new Date().toISOString()
        }]
    };

    try {

        await fetch(WEBHOOK_EDITOR, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        alert("Pedido enviado com sucesso!");

        document.querySelector("#editorForm form").reset();

        voltarHome();

    } catch (error) {

        console.error(error);

        alert("Erro ao enviar pedido.");

    }

}

// ======================
// PROCURANDO CLIENTE
// ======================

async function enviarCliente(event) {

    event.preventDefault();

    const nome = document.getElementById("clienteNome").value;
    const discord = document.getElementById("clienteDiscord").value;
    const tipo = document.getElementById("clienteTipo").value;
    const programa = document.getElementById("clientePrograma").value;
    const portfolio = document.getElementById("clientePortfolio").value;
    const preco = document.getElementById("clientePreco").value;
    const info = document.getElementById("clienteInfo").value;

    const payload = {
        content: CARGO_CLIENTE,
        embeds: [{
            title: "💼 Procurando Cliente",
            description: "Novo pedido enviado pelo site.",
            color: 10181046,

            fields: [
                {
                    name: "👤 Nome",
                    value: nome,
                    inline: true
                },
                {
                    name: "💬 Discord",
                    value: discord,
                    inline: true
                },
                {
                    name: "🎬 Tipo de Edição",
                    value: tipo,
                    inline: false
                },
                {
                    name: "🖥 Programa",
                    value: programa,
                    inline: true
                },
                {
                    name: "🌐 Portfólio",
                    value: portfolio || "Não informado",
                    inline: false
                },
                {
                    name: "💰 Preço",
                    value: preco,
                    inline: true
                },
                {
                    name: "📝 Informações",
                    value: info || "Nenhuma informação adicional."
                }
            ],

            footer: {
                text: "Editor Hub • Sistema Automático"
            },

            timestamp: new Date().toISOString()
        }]
    };

    try {

        await fetch(WEBHOOK_CLIENTE, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        alert("Pedido enviado com sucesso!");

        document.querySelector("#clienteForm form").reset();

        voltarHome();

    } catch (error) {

        console.error(error);

        alert("Erro ao enviar pedido.");

    }

}
