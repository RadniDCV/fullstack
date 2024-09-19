const OPTIONS ={
    method:'GET',
    headers:{
        'X-RapidAPI-Key':
        '71e59e906dmshfdc9ed284df2469p1b599cjsn0355f0f200d5',
        'X-RapidAPI-Host': 'ip.geolocation-and-threat-detection.p.rapidapi.com'
    }
}

const fechIpInfo = ip =>{
   return fetch(`https://ip.geolocation-and-threat-detection.p.rapidapi.com/54.85.132.205${ip}`)
   .then(res => res.json())
   .catch(err =>console.error(err))
}

const $form = document.querySelector('#form')

$form.addEventListener('submit', (event)=>{
    event.preventDefault()
})

