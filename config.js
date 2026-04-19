import { watchFile, unwatchFile } from 'fs'
import { fileURLToPath, pathToFileURL } from 'url'
import chalk from 'chalk'
import fs from 'fs'
import * as cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
import NodeCache from 'node-cache'

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))
const moduleCache = new NodeCache({ stdTTL: 300 });

/*⭑⭒━━━✦❘༻☾⋆⁺₊✧ 𝖇𝖑𝖔𝖔𝖉𝖇𝖔𝖙✧₊⁺⋆☽༺❘✦━━━⭒⭑*/

global.sam = ['393501989497',]
global.owner = [
  ['393501989497', 'endy', true],
  ['212614898801', 'bot', true],
  ['447449205584', 'endy+44', true],
  ['447393088288', 'ksav', true], 
  ['212693877842', 'medalis', true],
  ['393756972784', 'estreia', true],
  ['447935218835', 'exorcism', true],
]
global.mods = ['xxxxxxxxxxx', 'xxxxxxxxxxx', 'xxxxxxxxxxx']
global.prems = ['xxxxxxxxxxx', 'xxxxxxxxxxx', 'xxxxxxxxxxx']

/*⭑⭒━━━✦❘༻🩸 INFO BOT 🕊️༺❘✦━━━⭒⭑*/

global.nomepack = '𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮'
global.nomebot = '𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮'
global.wm = '𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮'
global.autore = '乇✘dy'
global.dev = '乇✘dy'
global.testobot = `𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮`
global.versione = pkg.version
global.errore = '*ERRORE INATTESO*, UTILIZZA IL COMANDO !segnala (errore) per contattare lo sviluppatore. contatto diretto:+39 350 198 9497'

/*⭑⭒━━━✦❘༻🌐 LINK 🌐༺❘✦━━━⭒⭑*/

global.repobot ='https//wa.me/393501989497'
global.gruppo = 'https://chat.whatsapp.com/EPY9EqMNV6XD0PmVk8jbEb?mode=gi_t'
global.insta = ''

/*⭑⭒━━━✦❘༻ MODULI ༺❘✦━━━⭒⭑*/

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

/*⭑⭒━━━✦❘🗝️ API KEYS 🌍༺❘✦━━━⭒⭑*/

global.APIKeys = { // le keys con scritto "varebot" vanno cambiate con keys valide
    spotifyclientid: 'varebot',
    spotifysecret: 'varebot',
    browserless: 'varebot',
    screenshotone: 'varebot',
    screenshotone_default: 'varebot',
    tmdb: 'varebot',
    gemini: 'varebot',
    ocrspace: 'varebot',
    assemblyai: 'varebot',
    google: 'varebot',
    googlex: 'varebot',
    googleCX: 'varebot',
    genius: 'varebot',
    unsplash: 'varebot',
    removebg: 'FEx4CYmYN1QRQWD1mbZp87jV',
    openrouter: 'varebot',
    lastfm: '36f859a1fc4121e7f0e931806507d5f9',
    sightengine_user: 'varebot',
    sightengine_secret: 'varebot'
};


/*⭑⭒━━━✦❘༻🪷 SISTEMA XP/EURO 💸༺❘✦━━━⭒⭑*/

global.multiplier = 1 // piu è alto piu è facile guardagnare euro e xp

/*⭑⭒━━━✦❘༻📦 RELOAD 📦༺❘✦━━━⭒⭑*/

let filePath = fileURLToPath(import.meta.url)
let fileUrl = pathToFileURL(filePath).href
const reloadConfig = async () => {
  const cached = moduleCache.get(fileUrl);
  if (cached) return cached;
  unwatchFile(filePath)
  console.log(chalk.bgHex('#3b0d95')(chalk.white.bold("File: 'config.js' Aggiornato")))
  const module = await import(`${fileUrl}?update=${Date.now()}`)
  moduleCache.set(fileUrl, module, { ttl: 300 });
  return module;
}
watchFile(filePath, reloadConfig)