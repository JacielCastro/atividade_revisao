/* import { Funcionario } from './exercicio01'

class Desenvolvedor extends Funcionario{

    habilidade: string[];
    tempoDeExperiencia: number;
    idioma: string;
    projeto: string;
    enderecoDoGithub: string;

    constructor(
        habilida: string[],
        tempoDeExperiencia: number,
        idioma: string, 
        projeto: string, 
        enderecoDoGithub: string
        ){

        super ()
        this.habilidade= habilida;
        this.tempoDeExperiencia= tempoDeExperiencia;
        this.idioma= idioma;
        this.projeto= projeto;
        this.enderecoDoGithub= enderecoDoGithub;

    }

    mostradados(){
        
        console.log(`---------- DADOS DO DESENVOLVEDOR ----------$`);
        super.mostradados();
        console.log(`HABILIDADE: _________________${this.habilidade}`);
        console.log(`TEMPO DE EXPERIENCIA: _______${this.tempoDeExperiencia}`);
        console.log(`IDIOMA: _____________________${this.idioma}`);
        console.log(`PROJETO: ____________________${this.projeto}`);
        console.log(`ENDERECO DO GITHUB __________${this.enderecoDoGithub}`);

    }

    /*constructor(
    public habilidade: string[],
    public tempoDeEperiencia: string,
    public idioma: string,
    public projetos: string,
    public enderecoDoGithub: string, 
    
    ){} 


}

const funcionario2 = new Desenvolvedor ('[javascrip,typerscript]',new Date('1995-02-10'),'masculino','789654987','luiz_gomes@gmail.com',) */