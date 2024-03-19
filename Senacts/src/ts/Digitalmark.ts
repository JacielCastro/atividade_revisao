// CRIANDO UMA CLASSE PROJETO
// enserindo o polimorfismo na classe projeto  
abstract class projeto { 
    public nome_projeto: string
    protected descricao: string
    public status: string
    protected prazo: string
    protected custo:number
    public data_inicio: Date 
    public data_termino: Date 
    
    // inicializando o método construtor 
    constructor(
        nome_projeto: string,
        descricao: string,
        status: string,
        prazo: string,
        custo: number,
        data_inicio:Date,
        data_termino:Date

    ){
        this.nome_projeto= nome_projeto
        this.descricao= descricao
        this.status= status
        this.prazo= prazo
        this.custo= custo
        this.data_inicio= data_inicio
        this.data_termino= data_termino

    }
    // inserindo o encapsulamento do atributo custo  
    getcusto(): number { 
        return this.custo;
    }
    getcprazo(): string { 
        return this.prazo;
    }
    getdescricao(): string{ 
        return this.descricao;
    }
    mostraDados(){
        console.log('--------------- DESCRIÇÃO DO PROJETO ---------------');
        console.log(`NOME DO PROJETO:_______________________${this.nome_projeto}`);
        console.log(`DATA DO INICIO DO PROJETO:_____________${this.data_inicio}`);
        console.log(`DATA DO TERMINO DO PROJETO:____________${this.data_termino}`);
        console.log(`PRAZO DO PROJETO:______________________${this.prazo}`);
        console.log(`DESCRIÇÃO DO PROJETO:__________________${this.descricao}`);
        console.log(`STATUS DO PROJETO:_____________________${this.status}`);
        console.log(`CUSTO DO PROJETO:______________________${this.custo}`);
    } 

} 
   
 class tarefa extends projeto{
    nome_tarefa: string
    responsavel: string
    descrição_tarefa: string

    constructor(
        nome_tarefa: string,
        responsavel: string,
        descrição_tarefa: string,
        nome_projeto: string,
        descrição: string,
        status: string,
        prazo: string,
        custo: number,
        data_inicio: Date,
        data_termino:Date

    ){
    
    super (nome_projeto,descrição, status, prazo, custo, data_inicio, data_termino);
    this.descrição_tarefa= descrição_tarefa
    this.responsavel= responsavel
    this.nome_tarefa= nome_tarefa

    }
    mostraDados(){
        console.log('---------- DESCRIÇÕES DAS TAREFAS ----------');
        console.log(`NOME DA TAREFA:_______________${this.nome_tarefa}`);
        console.log(`NOME DO RESPONSAVEL:__________${this.responsavel}`);
        console.log(`NOME DA TAREFA:_______________${this.descrição_tarefa}`);
        console.log(`NOME DO PROJETO:______________${this.nome_projeto}`);
        console.log(`DESCRIÇÃO DO PROJETO:_________${this.descricao}`);
        console.log(`STATUS DA TAREFA:_____________${this.status}`);
        console.log(`PROZO DA TAREFA:______________${this.prazo}`);
        console.log(`CUSTO DA TAREFA:______________${this.custo}`);
        console.log(`DATA DO INICIO DA TAREFA:_____${this.data_inicio.toLocaleDateString('PT-BR')}`);
        console.log(`DATA DO TERMINO DA TAREFA:____${this.data_termino.toLocaleDateString('PT-BR')}`);

    }  
}
    // ESTANCIANDO OS ATRIBUTOS DA CLASSE TAREFA
    const tarefa1 = new tarefa(
        'Avante',
        'Carlos Henrique',
        'Foco nas Vendas',
        'Vendas',
        'alcança as metas ',
        'Em andamento',
        '2 anos ',
        200.000,
        new Date('2024-01-01T12:12:12'),
        new Date('1956-12-31T12:12:12')
    );

tarefa1.mostraDados();

class Funcionario_user{
    constructor(
        public nome: string,
        public data_Nascimento: Date,
        public cpf: string,
        protected matricula: number,
        
    ){}

    getmatricula(): number{
        return this.matricula;
    }
    mostraDados(){
        console.log(`NOME DO FUNCIONARIO:_________________${this.nome}`);
        console.log(`DATA DE NASCIMENTO:__________________${this.data_Nascimento.toLocaleDateString('pt-br')}`);
        console.log(`CPF DO FUNCIONARIO:__________________${this.cpf}`);
        console.log(`MATRICULA DO FUNCIONARIO:____________${this.matricula}`);
    }
}
    const funcionario= new Funcionario_user('Jose Carlos', new Date('1989-04-22 '),'70058998732',1020304050);
    const funcionario10= new Funcionario_user('josimar silva',new Date('1987-02-20'),'78945698712',5040302010);
    const funcionario20= new Funcionario_user('Vanessa Cavalho', new Date('1992-03-18' ),'32165498723',6070809010);
    const funcionario30= new Funcionario_user('Carol silva', new Date('1990-01-18'),'23615948712',9876543212);

class Equipe {
    lider: string
    funcionario:Funcionario_user[]=[]

    constructor(
        lider: string,
    ){
        this.lider= lider
    }
    mostraDados(){
        console.log('-------------------- DADOS DA EQUIPE -----------------');
        console.log(`NOME DO LIDER DA EQUIPE:______________${this.lider}`)
        
    }
}
    const equipeOmega= new Equipe('Vera Lucia');
    equipeOmega.mostraDados(),
    console.log('=================================================');
    funcionario.mostraDados(),
    console.log('=================================================');
    funcionario10.mostraDados(),
    console.log('=================================================');
    funcionario20.mostraDados(),
    console.log('=================================================');
    funcionario30.mostraDados();
    
