const prompt = require('prompt-sync') ({sigint:true})
let sessoes = [
    {nome: "Meu Malvado Favorito 4", data:"23/07/2024", hora:"19:05", numeroSala:"Sala 4"},
    {nome: "Um Lugar Silencioso: Dia Um", data:"24/07/2024", hora:"12:50", numeroSala:"Sala 8"},
    {nome: "Deadpool & Wolverine", data:"25/07/2024", hora:"21:55", numeroSala:"Sala 1"},
   
];
exibirMenu();

function exibirMenu() {
    console.log(`
    ───────────▄▄▄▄▄▄▄▄▄▄▄▄▄
    ────────▄▀▀═════════════▀▀▄
    ───────█═══════════════════█
    ──────█═════════════════════█
    ─────█═══▄▄▄▄▄▄▄═══▄▄▄▄▄▄▄═══█
    ────█═══█████████═█████████═══█
    ────█══██▀────▀█████▀────▀██══█
    ───██████──█▀█──███──█▀█──██████
    ───██████──▀▀▀──███──▀▀▀──██████
    ────█══▀█▄────▄██─██▄────▄█▀══█
    ────█════▀█████▀───▀█████▀════█
    ────█═════════════════════════█
    ────█═════════════════════════█
    ────█═══════▀▄▄▄▄▄▄▄▄▄▀═══════█
    ────█═════════════════════════█
    ───▐▓▓▌═════════════════════▐▓▓▌
    ───▐▐▓▓▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐▓▓▌▌
    ───█══▐▓▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄▓▌══█
    ──█══▌═▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌═▐══█
    ──█══█═▐▓▓▓▓▓▓▄▄▄▄▄▄▄▓▓▓▓▓▓▌═█══█
    ──█══█═▐▓▓▓▓▓▓▐██▀██▌▓▓▓▓▓▓▌═█══█
    ──█══█═▐▓▓▓▓▓▓▓▀▀▀▀▀▓▓▓▓▓▓▓▌═█══█
    ──█══█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█══█
    ─▄█══█▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌█══█▄
    ─█████▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌─█████
    ─██████▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌─██████
    ──▀█▀█──▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▌───█▀█▀
    ─────────▐▓▓▓▓▓▓▌▐▓▓▓▓▓▓▌
    ──────────▐▓▓▓▓▌──▐▓▓▓▓▌
    ─────────▄████▀────▀████▄
    ─────────▀▀▀▀────────▀▀▀▀
    ────────── Menu ────────────────────────
    1. Adicionar uma nova sessão
    2. Listar todas as sessões 
    3. Atualizar uma sessão existente
    4. Cancelar uma sessão
    5. Sair
    ──────────────────────────────────────── `);

    let opcao = prompt("Digite a opção desejada: ");
    
    switch(opcao) {
        case '1':
            adicionarSessao();
            break;
        case '2':
            listarSessao();
            exibirMenu()
            break;
        case '3':
            atualizarSessao();
            break;
        case '4':
            cancelarSessao();
            break;
        case '5':
            console.log('Saindo do sistema. Até breve!');
            process.exit();
            break;
        default:
            console.log('\n Opção inválida, tente novamente.');
            exibirMenu();
            break;
    }
}

function adicionarSessao() {
    console.log('Adicionar nova sessão:');
    let nome = prompt("Nome do filme: ");
    let data = prompt("Data da sessão (DD/MM/AAAA):");
    let hora = prompt("Hora da sessão: ");
    let numeroSala = prompt("Número da sala:");
    
    
    let novaSessao = {
        nome: nome,
        data: data,
        hora: hora,
        numeroSala: numeroSala
    };
    
    sessoes.push(novaSessao);
    console.log("Sessão adicionada com sucesso!");
    exibirMenu();
}

function listarSessao() {
    console.log("\n Lista de sessões:");
    sessoes.forEach((sessao, index) => {
        console.log(`${index + 1}. Nome do filme: ${sessao.nome} - Data da sessão: ${sessao.data} - Horário da sessão: ${sessao.hora} - Número da sala: ${sessao.numeroSala} `);
    });
}

function atualizarSessao() {
    listarSessao();
    const index = prompt("Digite o número da sessão que deseja atualizar: ");
    
    if (index > 0 && index <= sessoes.length) {
        const novaData = prompt("Digite a nova data da sessão (DD/MM/AAAA): ");
        const novaHora = prompt("Digite o novo horário da sessão: ");
        
        sessoes[index - 1].data = novaData;
        sessoes[index - 1].hora = novaHora;
        
        console.log("Sessão atualizada com sucesso!");
    } else {
        console.log("Sessão não encontrada.");
    }
    exibirMenu()
}

function cancelarSessao() {
    listarSessao();
    const index = prompt("Digite o número da sessão que deseja cancelar: ");
    
    if (index > 0 && index <= sessoes.length) {
        sessoes.splice(index - 1, 1);
        console.log("Sessão cancelada com sucesso!");
    } else {
        console.log("Sessão não encontrada.");
    }
    exibirMenu()
}
