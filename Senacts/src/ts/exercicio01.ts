// Cadastro de Funcionários:
// • Detalhes pessoais e profissionais dos colaboradores.
abstract class Pessoa {

    constructor(
        public nome: string,
        protected email: string,
        protected telefone: string,
        public data_nascimento: Date,
        public endereco: string[],
        protected cpf: string,
        protected genero?: string
    ) {}
    
    mostrarDados() {
    }
}

class Funcionario extends Pessoa {
    matricula: string; //
    cargo: string; //
    

    constructor(
        endereco: string[], //
        cpf: string, //
        nome: string, //
        email: string, //
        telefone: string, //
        cargo: string, //
        data_nascimento: Date, //
        matricula: string, //
        genero?: string //
    ) {
        super(nome, email, telefone, data_nascimento, endereco, cpf, genero);
        this.cargo = cargo;
        this.matricula = matricula;
    }
    
    mostrarDados() {
        console.log('--------------Dados do funcionário-------------');
        console.log(`Nome do usuário: ${this.nome}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`Data de nascimento: ${this.data_nascimento.toLocaleDateString('pt-BR')}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Endereço: ${this.endereco.join(', ')}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Hora: ${this.data_nascimento.toLocaleTimeString()}`);
        if (this.genero) {
            console.log(`Gênero: ${this.genero}`);
        }
        console.log('------------------------------------------------');
    }
}



const funcionario1 = new Funcionario(
    ['Rua do Senac', 'Número 200', 'Bairro Senac', 'Cidade Senac'],
    '102547102',
    'Dr. Zezinho',
    'zezinho@email.com',
    '84995265878',
    'Médico',
    new Date('1956-10-25T12:12:12'),
    '2514'
);

funcionario1.mostrarDados();

class Paciente extends Pessoa {
    obs_alergias?: string;
    
    constructor(
        nome: string,
        cpf: string,
        telefone: string,
        email: string,
        endereco: string[],
        obs_alergias?: string
    ) {
        super(nome, email, telefone, new Date(), endereco, cpf);
        this.obs_alergias = obs_alergias;
    }
}

const paciente1 = new Paciente(
    'Fulano',
    '1234567890',
    '0987654321',
    '84 9 9999-999',
    ['Rua tal de tal'],
    'Alergia a alguma coisa'
);


class Consulta {
    local: string;
    data: Date;
    convenio: boolean;
    medico: Funcionario;
    paciente: Paciente;
    
    constructor(local: string, data: Date, convenio: boolean, medico: Funcionario, paciente: Paciente) {
        this.data = data;
        this.local = local;
        this.medico = medico;
        this.convenio = convenio;
        this.paciente = paciente;
    }
    
    mostrarDados() {
        console.log('--------------Dados da consulta-------------');
        console.log(`Local: ${this.local}`);
        console.log(`Data: ${this.data.toLocaleDateString('pt-BR')}`);
        console.log(`Convênio: ${this.convenio ? 'Sim' : 'Não'}`);
        console.log('Medico:');
        this.medico.mostrarDados();
        console.log('Paciente:');
        this.paciente.mostrarDados();
        console.log('--------------------------------------------');
    }
}

const consulta1 = new Consulta(
    'Mosquito',
    new Date('2024-09-23T12:12:12'),
    true,
    funcionario1,
    paciente1
);

/* const consulta2 = new Consulta(
    'Japão',
    new Date('2024-09-23T12:12:12'),
    false,
    funcionario1,
    paciente1
); */

consulta1.mostrarDados();
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#formFuncionario');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = (document.getElementById('nome') as HTMLInputElement).value;
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const telefone = (document.getElementById('telefone') as HTMLInputElement).value;
            const dataNascimento = (document.getElementById('dataNascimento') as HTMLInputElement).value;
            const endereco = (document.getElementById('endereco') as HTMLInputElement).value;
            const cpf = (document.getElementById('cpf') as HTMLInputElement).value;
            const genero = (document.getElementById('genero') as HTMLSelectElement).value;
            const cargo = (document.getElementById('cargo') as HTMLInputElement).value;
            const matricula = (document.getElementById('matricula') as HTMLInputElement).value;

            // Armazenar os dados do funcionário no localStorage
            localStorage.setItem('nome', nome);
            localStorage.setItem('email', email);
            localStorage.setItem('telefone', telefone);
            localStorage.setItem('dataNascimento', dataNascimento);
            localStorage.setItem('endereco', endereco);
            localStorage.setItem('cpf', cpf);
            localStorage.setItem('genero', genero);
            localStorage.setItem('cargo', cargo);
            localStorage.setItem('matricula', matricula);

            // Redirecionar para a página da tabela
            window.location.href = './funcionario.html';
        });
    } else {
        console.error('O formulário não foi encontrado.');
    
    }

});
//consulta2.mostrarDados();