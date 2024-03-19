/* // criando uma clase 
class Livros{

    categoria: string;
    titulo: string;
    autor: string;
    editora: string;
    avaliacao: string; 
    quantidadeDisponivel: number;
    valor: number;
    // chamando a classe no modo construtor.
    // sempre quando tiver um paramito opconal coloca um paramito obrigatoria antes
    constructor(categoria: string, titulo: string, autor: string, editora: string, avaliacao: string, quantidadeDisponivel: number, valor: number){
    // inicializando os paramito
        this.categoria= categoria;
        this.titulo= titulo;
        this.autor= autor;
        this.editora= editora;
        this.avaliacao= avaliacao;
        this.quantidadeDisponivel= quantidadeDisponivel;
        this.valor= valor;  

    }
    // CRIANDO UM MOSTRADOR DE DADOS 
    mostradodedados(){
        console.log(`-------- DADOS DOS LIVROS -------- `)
        console.log(`CATEGORIA:__________ ${this.categoria}`)
        console.log(`TITULO:_____________ ${this.titulo}`)
        console.log(`AUTOR:______________ ${this.autor}`)
        console.log(`EDITORA:____________ ${this.editora}`)
        console.log(`AVALIAÇÃO:__________ ${this.avaliacao}`)
        console.log(`QUANTIDADE DESPONILVEL:__________ ${this.quantidadeDisponivel}`)
        console.log(`VALOR:______________ ${this.valor}`)
        console.log('------------------------------------------------------------')
        
    }

}
    // criando uma variavel const, para poder chama a classe.
    const livros1= new Livros('Fantasia','Branca de Neve','Carlos Cavalhos','rio branco','5 estrelas',98,150 )
    console.log(livros1.mostradodedados())

class Usuario{

    nome: string;
    idade: number;
    genero: string;
    cpf: string;
    email: string;
    telefone: string;
    endereco: string;
    historico: string;
    
    constructor(nome: string, idade: number, genero: string, cpf: string, email: string, telefone: string, endereco: string, historio: string){
        this.nome= nome;
        this.idade= idade;
        this.genero= genero;
        this.cpf= cpf;
        this.email= email;
        this.telefone= telefone;
        this.endereco= telefone;
        this.historico= historio;
    }
}

    const usuario1= new Usuario('Jaciel',29,'masculino','78965412311','jacelsilva@gamil.com','84987859121','Rua rio mearim','2 livros a 30 dias')

    class emprestimoDeLivros{

        usuario: Usuario;
        quantidades: number;
        dataInicial: Date;
        dataFinal: Date;
        duracao: string;
        livros: Livros;
        
    constructor(usuario: Usuario, quantidade: number, dataInicial: Date, dataFinal: Date,  duracao: string, livros: Livros){
        this.usuario= usuario;
        this.quantidades= quantidade;
        this.dataInicial= dataInicial;
        this.dataFinal= dataFinal;
        this.duracao= duracao;
        this.livros= livros;

    }
}

    const emprestimo1= new emprestimoDeLivros(usuario1 ,2, new Date("2024-02-21"), new Date("2024-04-21"),'2 mês',livros1);
    
    console.log(emprestimo1) */