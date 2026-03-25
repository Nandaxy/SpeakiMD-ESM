/*
Author : Nandaxy 
WA : +6285174269046
Base : Elaina-MultiDevice
Release : 22 Nov 2022
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss') + ' WIB';
let wktuwita = moment.tz('Asia/Makassar').format('HH:mm:ss') + ' WITA';
let wktuwit = moment.tz('Asia/Jayapura').format('HH:mm:ss') + ' WIT';
global.gabung = wktuwib + '\n' + wktuwita + '\n' + wktuwit;
let d = new Date(new Date + 3600000)
let locale = 'id'

let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

/*============= MAIN INFO =============*/
global.pairing = '62895373137660'
global.owner = [['62999999999', 'Nandaxy', true]]
global.mods = []
global.prems = []
global.nomorbot = '62895373137660'
global.nomorown = '62999999999'

/*============= WATERMARK =============*/
global.readMore = readMore
global.author = 'Nandaxy'
global.namebot = 'SPEAKI-MD ESM'
global.wm = '© Speaki-MD By Nandaxy'
global.watermark = wm
global.botdate = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
global.stickpack = `Sticker Dibuat dengan ${namebot}\ngithub.com/Nandaxy\n\n+${nomorbot}`
global.stickauth = `© Speaki-MD By Nandaxy`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`

/*============== SOCIAL ==============*/
global.sig = 'https://www.instagram.com/nandaaa_79'
global.sgh = 'https://github.com/Nandaxy'
global.sgc = 'https://whatsapp.com/channel/0029Vb717dfIN9ixDdSu4X02'
global.sgw = 'https://monitor.gokil.biz.id/'
global.sdc = '-'
global.sfb = 'https://www.facebook.com/'
global.snh = 'https://www.instagram.com/nandaaa_79'

/*============== PAYMENT ==============*/
global.pdana = '628996213356'
global.qris = 'https://i.pinimg.com/736x/02/a3/d9/02a3d93f93ece9c326247f4c7fefd237.jpg'
global.psaweria = 'https://saweria.co'

/*============= RESPON =============*/
global.wait = 'Please Wait...'
global.eror = 'Error!'

/*============= API =============*/
global.APIs = {
  ryzumi: 'https://api.ryzumi.net',

}

/*============= API KEY =============*/
global.APIKeys = {
  // 'https://website': 'apikey'
}

/*============== LOGO ==============*/
global.thumb = 'https://telegra.ph/file/cce9ab4551f7150f1970d.jpg' //Main Thumbnail
global.thumb2 = 'https://telegra.ph/file/26b515d170f1e599f78a7.jpg'
global.thumbbc = 'https://telegra.ph/file/05f874dc87f7e27fa8127.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'
global.thumblvlup = 'https://telegra.ph/file/a3e66e0fa840b08236c75.jpg'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.djson = 'application/json'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU
global.dashmenu = '┅━━━═┅═❏ *ღ *DASHBOARD* ღ* ❏═┅═━━━┅'
global.cmenut = '❏––––––『'                       //top
global.cmenuh = '』––––––'                        //header
global.cmenub = '┊❀'                            //body
global.cmenuf = '┗━═┅═━––––––๑\n'                //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '┊'                              //pembatas menu selector

global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶', '❏', '⫹⫺']

global.multiplier = 0

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
