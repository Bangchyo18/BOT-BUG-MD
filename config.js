/**
   * Create By THE JO BOT
   * Base by Dika Ardnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '6ffabd6eac',
}


global.ownername = 'ε πππ§π  πππ‘π²π¨ ε'
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)
// Other
global.owner = ['6281226306638','6281226306638','6281226306638']
global.premium = ['6281226306638']
global.packname = 'β«Ήβ«Ί π±πΎπ πΌππ»ππΈ π³π΄ππΈπ²π΄ β«Ήβ«Ί'
global.author = 'β«Ήβ«Ί π±πππ π²πππ’π β«Ήβ«Ί'
global.wlcm = []
global.sessionName = 'session'
global.prefa = ['','!','.','π¦','π€','πΏ']
global.sp = 'β­'
global.mess = {
    success: 'β Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Sabar Kak....π€', 
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/jo.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
