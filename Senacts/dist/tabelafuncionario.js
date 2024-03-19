document.addEventListener('DOMContentLoaded', function() {
    // Recuperar os dados do localStorage
    const nome = localStorage.getItem('nome');
    const email = localStorage.getItem('email');
    const telefone = localStorage.getItem('telefone');
    const dataNascimento = localStorage.getItem('dataNascimento');
    const endereco = localStorage.getItem('endereco');
    const cpf = localStorage.getItem('cpf');
    const genero = localStorage.getItem('genero');
    const cargo = localStorage.getItem('cargo');
    const matricula = localStorage.getItem('matricula');

    // Verificar se existem dados no localStorage
    if (nome && email && telefone && dataNascimento && endereco && cpf && genero && cargo && matricula) {
        // Adicionar os novos dados à tabela
        const tbody = document.getElementById('funcionariosTableBody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${nome}</td>
            <td>${email}</td>
            <td>${telefone}</td>
            <td>${dataNascimento}</td>
            <td>${endereco}</td>
            <td>${cpf}</td>
            <td>${genero}</td>
            <td>${matricula}</td>
            <td>${cargo}</td>
        `;

        // Inserir a nova linha no início da tabela
        tbody.insertBefore(newRow, tbody.firstChild);

        // Limpar os campos do formulário após adicionar à tabela
        localStorage.clear();
    }
});