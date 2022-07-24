const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2709866486msh60ee322e288ad0dp16a358jsnba7b417f2cb3',
		'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
	}
};

const fetchIpInfo = ip => {
    return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
        .then(res => res.json())
        .catch(err => console.error(err));
}

const $ = selector => document.querySelector(selector);

const $form = $('#form');
const $input = $('#input');
const $submit = $('#submit');
const $results = $('#results');

$form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const {value} = $input;
    if (!value) return

    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)
    
    if (ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')
})