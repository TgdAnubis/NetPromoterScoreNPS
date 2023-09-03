const handleSubmit = (event) => {
    event.preventDefault();
    
    const avaliador = document.querySelector('input[name=avaliador]').value;
    const avaliacao = document.querySelector('input[name=avaliacao]').value;
    const comentarios = document.querySelector('textarea[name=comentarios]').value;

    fetch('https://api.sheetmonkey.io/form/rdorKgdq2phF9xhsh4ZYXh', {
        method: 'post',
        headers: {
            'accept': 'application/json',
            'content-Type': 'application/json',
        },
        body: JSON.stringify({ avaliador, avaliacao, comentarios }),
    });
}

document.querySelector('form').addEventListener('submit', handleSubmit);
