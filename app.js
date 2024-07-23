const prompt = require ('prompt-sync')({sigint: true});
const biblioteca = require ("./biblioteca.js");

while(true){
    console.log(`1. Cadastrar livro
    2. Listar livros
    3. Atualizar livros
    4. Deletar livros
    5. Sair`);
    
    let opcao = prompt("O que deseja fazer?");
    let nome, autor, paginas, genero

    switch (opcao) {
        case "1":
            let nome = prompt("Digite o nome do livro: ");
            let autor = prompt("Digite o autor do livro: ");
            let paginas = prompt("Digite a quantidade de páginas do livro: ");
            let genero = prompt("Digite o gênero do livro: ");

            biblioteca.create({
                nome,
                autor,
                paginas,
                genero
            })

            break;
        case "2":
            biblioteca.read();

            break;
        case "3": 
            indice = prompt("Digite o indice do livro: ")
            nome = prompt("Digite o nome do livro: ");
            autor = prompt("Digitre o nome do livro: ");
            paginas = prompt("Digite a quantidade de páginas do livro: ");
            genero = prompt("Digite o gênero do livro: ");

            biblioteca.update({
                nome,
                autor,
                paginas,
                genero
            }, 
            --indice);

            break;
        case "4":
            biblioteca.read();

            indice = prompt("Digite o indice do livro: ");

            biblioteca.remove(--indice);

            break;
        case "5":
            console.log("Programa encerrado com sucesso!");
            process.exit();
            break;
        default:
            console.log("Opção inválida!");
            break;
    }
}