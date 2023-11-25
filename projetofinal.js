let contatos = [
    { id: 1, nome: "João", telefone: "123456789", email: "joao@example.com", endereco: "Rua A, 123" },
    { id: 2, nome: "Maria", telefone: "987654321", email: "maria@example.com", endereco: "Rua B, 456" },
    
    // Add + contatos
];

// Func para add novo contato
function adicionarContato(novoContato) {
    contatos = [...contatos, { id: contatos.length + 1, ...novoContato }];
}

// Func para editar algum contato
function editarContato(id, novosDados) {
    contatos = contatos.map(contato => (contato.id === id ? { ...contato, ...novosDados } : contato));
}

// Func para remover um contato
function removerContato(id) {
    contatos = contatos.filter(contato => contato.id !== id);
}

// Func para listar todos os contatos
function listarContatos() {
    contatos.forEach(contato => console.log(contato));
}

// Func para obter um contato (ID)
function obterContatoPorId(id) {
    return contatos.find(contato => contato.id === id);
}

// Exemplos

adicionarContato({ nome: "Carlos", telefone: "555555555", email: "carlos@example.com", endereco: "Rua C, 789" });
listarContatos();

editarContato(2, { nome: "Maria Silva" });
listarContatos();

removerContato(1);
listarContatos();

const contatoEncontrado = obterContatoPorId(2);
console.log("Contato encontrado:", contatoEncontrado);