const OPTIONS = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '775533cccdmsh54e6cdf750b09b0p185a6fjsn0dee87c9ee62',
        'x-rapidapi-host': 'ip-directory.p.rapidapi.com'
    }
}

const isValidIp = (ip) => {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipRegex.test(ip);
}

const fetchIpInfo = ip => {
    return fetch(`https://ip-directory.p.rapidapi.com/lookup/${ip}?risk=true&hostname=false`, OPTIONS)
        .then(res => res.json())
        .catch(err => {
            console.error(err);
            throw new Error('Error al obtener la información de la IP');
        });
}

const $ = selector => document.querySelector(selector)

const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $results = $('#results')

$form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { value } = $input;
    
    if (!value) return alert('Por favor, ingresa una IP');
    if (!isValidIp(value)) return alert('Formato de IP inválido');

    $submit.setAttribute('disabled', '');
    $submit.setAttribute('aria-busy', 'true');
    $results.textContent = 'Cargando...';

    try {
        const ipInfo = await fetchIpInfo(value);
        
        if (ipInfo) {
            $results.innerHTML = JSON.stringify(ipInfo, null, 2);
        } else {
            $results.textContent = 'No se encontró información para esta IP.';
        }
    } catch (error) {
        $results.textContent = error.message;
    } finally {
        $submit.removeAttribute('disabled');
        $submit.removeAttribute('aria-busy');
    }
});
