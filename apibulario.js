// https://consultas.anvisa.gov.br/api/consulta/bulario?count=10&filter%5BnomeProduto%5D=ALPRAZOLAM&page=1

const urlBase = 'https://consultas.anvisa.gov.br/api';
var qtd = 10;

async function pesquisarMedicamentos(nomeProduto, pagina = 1) {
    //
    nomeProduto = 'Amoxicilina';


    var headerOpts = new Headers();
    headerOpts.append("authorization", "Guest");
    headerOpts.append("Cookie", "FGTServer=2DE20D8040A1176F71792EB219E8DA9BCEDF996805D330F1AFAB13D5103423AE685570373EACB70B61CDD98DCE85; _TRAEFIK_BACKEND=http://10.0.15.229:8080");

    var requestOptions = {
        method: 'GET',
        headers: headerOpts,
        redirect: 'follow',
    };

    fetch("https://consultas.anvisa.gov.br/api/consulta/bulario?count=10&filter%5BnomeProduto%5D=ALPRAZOLAM&page=1&=", requestOptions)
        .then(response => response.text())
        .then(result => {
            // console.log(result);

            for (let i of JSON.parse(result).content) {
                console.log(`${i.idProduto} - ${i.numProcesso} - ${i.nomeProduto} - ${i.razaoSocial}`);
            }

        })
        .catch(error => console.log('error', error));
}
