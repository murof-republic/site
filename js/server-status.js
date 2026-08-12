const url = 'https://api.mcstatus.io/v2/status/java/mc.murof.me';

async function status() {
	try {
		const response = await fetch(url);
		const data = await response.json();

		document.getElementById('server-address').innerText = data.host;
		
		if(data.online === false || data.software === null) {
			document.getElementById('server-dot').classList.add('offline');
		} else {
			document.getElementById('server-dot').classList.add('online');
		}

	} catch(erro) {
		console.log('Erro ao buscar dados!:', erro);
	}
};

status();
