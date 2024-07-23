const biblioteca = [];

function create(livro) {
    biblioteca.push(livro)
};

const read = () => {
    if (biblioteca.forEach === 0)
        console.log("Nenhum livro encontrado");
    biblioteca.forEach((livro, indice) => {
        console.log(indice + 1, livro);
    })
};

const update = function (livro, indice){
    biblioteca[indice] = livro
};


const remove = indice => {
    biblioteca.splice(indice, 1)
};

module.exports = {
    create,
    read,
    update,
    remove
};