import Swal from 'sweetalert2';
const btn = document.querySelector('button');
const inputcep = document.querySelector('input');
const dados = document.querySelector('pre');



btn.addEventListener('click', buscaCep);

async function buscaCep(){
    const cep = inputcep.value;
    if (cep === ''){
        Swal.fire(
            'Ops...',
            'É preciso inserir um CEP',
            'Error'
          )
          return;
    }
  
    
    const url = `https://viacep.com.br/ws/${cep}/json/`
    
    try {
        const response = await fetch(url)
        const data = await response.json()

        dados.innerHTML = JSON.stringify(data);
        return dados;
        
    }catch(error){
        console.log(error)
    }


}