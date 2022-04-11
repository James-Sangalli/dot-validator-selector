(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
    "validators": [
        {
            "accountId": "15wznkm7fMaJLFaw7B8KrJWkNcWsDziyTKVjrpPhRLMyXsr5",
            "identity": {
                "display": "🌐 decentraDOT.com 🌐",
                "legal": "",
                "web": "https://decentradot.com",
                "riot": "",
                "email": "admin@decentradot.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 52001563691345,
            "commission": "3%"
        },
        {
            "accountId": "1cFsLn7o74nmjbRyDtMAnMpQMc5ZLsjgCSz9Np2mcejUK83",
            "identity": {
                "display": "Uno Staking",
                "legal": "",
                "web": "",
                "riot": "@unostaking:matrix.org",
                "email": "operator@unostaking.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@UnoStaking"
            },
            "staked": 106471143139151,
            "commission": "3%"
        },
        {
            "accountId": "14Y4s6V1PWrwBLvxW47gcYgZCGTYekmmzvFsK1kiqNH2d84t",
            "identity": {
                "display": "RockX_Polkadot",
                "legal": "RockX",
                "web": "https://www.rockx.com",
                "riot": "",
                "email": "support@rockx.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@rockx_official"
            },
            "staked": 82281731352326,
            "commission": "10%"
        },
        {
            "accountId": "14tcxHSTAiZf7M4vcLfFdGkGJFjfx6zDqds5QVyz2H24hKgG",
            "identity": {
                "display": "Mile",
                "legal": "",
                "web": "",
                "riot": "@matherceg:matrix.org",
                "email": "mherceg@protonmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 101994955495262,
            "commission": "3%"
        },
        {
            "accountId": "13ozGG4C5CnB2aQyrdxsf1yf5n4u6252J2Gd9neWk6Zz3psW",
            "identity": {
                "display": "ForklessNation",
                "legal": "",
                "web": "",
                "riot": "",
                "email": "hello@forklessnation.io",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@ForklessNation"
            },
            "staked": 50817880643543,
            "commission": "1.9%"
        },
        {
            "accountId": "14ShUZUYUR35RBZW6uVVt1zXDxmSQddkeDdXf1JkMA6P721N",
            "identity": {
                "display": "Wei",
                "legal": "Wei Tang",
                "web": "https://that.world/~wei/",
                "riot": "@wei:that.world",
                "email": "wei@that.world",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 554005388214145,
            "commission": "3%"
        },
        {
            "accountId": "16Y3FmTiJ3ZYAUZrf5rZtxrQJzcHsDBdscpu2zgMD2xN6NY7",
            "identity": {
                "display": "PDP_Validator",
                "legal": "",
                "web": "",
                "riot": "@paveldp:matrix.org",
                "email": "pavel.butenko@yahoo.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@PaulBAciD"
            },
            "staked": 53705474783741,
            "commission": "2.9%"
        },
        {
            "accountId": "16YwUZyLdeAoe4KmhivGwuuJpBH1US4qkUtXK2V83MVXUy6x",
            "identity": {
                "display": "GTSTAKING",
                "legal": "",
                "web": "",
                "riot": "@gauth8z:matrix.org",
                "email": "",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@GStaking"
            },
            "staked": 57684628100522,
            "commission": "3%"
        },
        {
            "accountId": "148HzdSuFsDrNKnAHFs81BJzZxmKgwEC6Pmpw2QJnTy3Hv3R",
            "identity": {
                "display": "CoinFund/Grassfed",
                "legal": "",
                "web": "",
                "riot": "",
                "email": "",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@coinfund_io"
            },
            "staked": 152694247021442,
            "commission": "5%"
        },
        {
            "accountId": "1WG3jyNqniQMRZGQUc7QD2kVLT8hkRPGMSqAb5XYQM1UDxN",
            "identity": {
                "display": "DokiaCapital",
                "legal": "",
                "web": "https://staking.dokia.cloud",
                "riot": "@awrelll:matrix.org",
                "email": "",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 6044401583000000,
            "commission": "5%"
        }
    ],
    "era": 678
}
},{}],2:[function(require,module,exports){
const latestKsm = require("./ksm/latest.json");
const latestDot = require("./dot/latest.json");

document.addEventListener("DOMContentLoaded", async () => {

    document.getElementById("submit").addEventListener("click", async () => {
        document.getElementById("status").hidden = false;
        const isKSM = document.getElementById("KSM").checked;
        let data;
        if(isKSM) {
            data = latestKsm;
        } else {
            data = latestDot;
        }
        document.getElementById("validators").innerText = data.validators.map((v, i) => {
            return `${++i}. address: ${v.accountId} commission: ${v.commission} name: ${v.identity.display}`;
        }).join("\n");
        document.getElementById("status").innerText = `Validators meeting the criteria in era ${data.era}`;
    });

});
},{"./dot/latest.json":1,"./ksm/latest.json":3}],3:[function(require,module,exports){
module.exports={
    "validators": [
        {
            "accountId": "J19LYGghRCe4Ct3VW4Vz1amMoUgogS1sh2FQvPWroKcDdb1",
            "identity": {
                "display": "SAXEMBERG",
                "legal": "",
                "web": "https://saxemberg.com/",
                "riot": "@s_saxemberg:matrix.org",
                "email": "",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@saxemberg"
            },
            "staked": 223114434117351,
            "commission": "3%"
        },
        {
            "accountId": "HKKT5DjFaUE339m7ZWS2yutjecbUpBcDQZHw2EF7SFqSFJH",
            "identity": {
                "display": "RMRK Multisig",
                "legal": "",
                "web": "https://rmrk.app",
                "riot": "",
                "email": "hello@rmrk.app",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@rmrkapp"
            },
            "staked": 4835000000000000,
            "commission": "5%"
        },
        {
            "accountId": "EyTegKZ9DBvMkV6pMbjx2fRk3N2VLNNduuto1PGpYcEqRrX",
            "identity": {
                "display": "andreita-validator-0",
                "legal": "",
                "web": "",
                "riot": "@andreita:matrix.org",
                "email": "andreaf.speziale@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@andreafspeziale"
            },
            "staked": 128559860473940,
            "commission": "10%"
        },
        {
            "accountId": "Ew4JDQENKYKdBkgW6bJfFqYYXaDw4kupXBrXyMcJoU6Lc9Z",
            "identity": {
                "display": "Amiga Staking",
                "legal": "",
                "web": "",
                "riot": "@amigastaking:matrix.org",
                "email": "operator@amigastaking.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@AmigaStaking"
            },
            "staked": 121744662461433,
            "commission": "10%"
        },
        {
            "accountId": "F7Wa1su7NRSr6LWuhPWdXcQALDyzm8Vmev7WtV5jVPtJELs",
            "identity": {
                "display": "ANAMIX",
                "legal": "ANAMIX",
                "web": "https://anamix.top/",
                "riot": "@dbpatty:matrix.org",
                "email": "anamix@polkadot.pro",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 900665650031888,
            "commission": "5%"
        },
        {
            "accountId": "GD6MTUJG9Ym7tS6PLF42yreHpqpvFgPcqPwcyRGiMv2TSGR",
            "identity": {
                "display": "Zetetic Validator",
                "legal": "",
                "web": "",
                "riot": "@zeteticvalidator:matrix.org",
                "email": "operator@zeteticvalidator.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@ZeticValidator"
            },
            "staked": 119301436269216,
            "commission": "10%"
        },
        {
            "accountId": "HHxJGYkkxzYNpDmoGomwuGBc8mtZQDhyhvWiCgUpJttpR1K",
            "identity": {
                "display": "Po-Ku People ❤️",
                "legal": "",
                "web": "",
                "riot": "@poku_node:matrix.org",
                "email": "",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@PoKuPeople"
            },
            "staked": 117287600000000,
            "commission": "10%"
        },
        {
            "accountId": "FWz717J6ATaYSNy2tRHAskEC9SP4uKHNJYC9mvfvimkB8GT",
            "identity": {
                "display": "Dionysus🍇",
                "legal": "",
                "web": "https://dionysus.network/",
                "riot": "@dionysus.validator:matrix.org",
                "email": "hi@dionysus.network",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@DionysusValid"
            },
            "staked": 101273099504376,
            "commission": "5%"
        },
        {
            "accountId": "J12kKQz1qcCHBg36Txz2k9mNKYERhjKRRSshwUghT11medm",
            "identity": {
                "display": "lloyds.tech",
                "legal": "LLoyds Blockchain Technology",
                "web": "https://lloyds.tech",
                "riot": "@lloyds.tech:matrix.org",
                "email": "tech@lloyds.tech",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@lloyds_tech"
            },
            "staked": 109043166078791,
            "commission": "3%"
        },
        {
            "accountId": "Gve4JFfF5YkZJNwKTbRVTQCkLXJJhzjJszJjxPvHLb9fho5",
            "identity": {
                "display": "BRAVEBAT",
                "legal": "",
                "web": "https://bravebat.info",
                "riot": "@bravebat:matrix.org",
                "email": "bravebatinfo@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@BraveBatInfo"
            },
            "staked": 100313195106737,
            "commission": "10%"
        },
        {
            "accountId": "F7hDMvu33u14QPXbkBzqF4CuuyyruB2xi6D3V7aUbY8KGpr",
            "identity": {
                "display": "SynerWork Inc",
                "legal": "",
                "web": "",
                "riot": "",
                "email": "staking@synerwork.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 103500000000000,
            "commission": "3%"
        },
        {
            "accountId": "EDNEfKXHd645DPpBhLZjaEwp4sPhj4STjjS4QrMbFU1FqbZ",
            "identity": {
                "display": "luckyve",
                "legal": "",
                "web": "",
                "riot": "@luckyve:matrix.org",
                "email": "luckyvenode@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 100000000000000,
            "commission": "10%"
        },
        {
            "accountId": "DSbhnaGBytDGRfZTmdcArzCL6T3HQ8gcZxWpF5gLBP6y1Qe",
            "identity": {
                "display": "Wei",
                "legal": "Wei Tang",
                "web": "https://that.world/~wei/",
                "riot": "@wei:that.world",
                "email": "wei@that.world",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 112462334852291,
            "commission": "3%"
        },
        {
            "accountId": "EiMA69PZWju1jmisAU3ubN4wJQgBexnFXZpWb7aMtftP5rV",
            "identity": {
                "display": "Generic-Chain",
                "legal": "Two Pebbles Ventures",
                "web": "https://generic-chain.io",
                "riot": "@generic-chain:matrix.org",
                "email": "info@generic-chain.io",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@generic_chain"
            },
            "staked": 104039907751015,
            "commission": "3%"
        },
        {
            "accountId": "EAkB83iUA6vJFXqSzuwYXq8vdZD5kcKgTP7BZkVRQ3iCVqC",
            "identity": {
                "display": "TransX",
                "legal": "TransX",
                "web": "https://transx.io",
                "riot": "@transx:matrix.org",
                "email": "silver@transx.io",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@TransX11"
            },
            "staked": 800000095715910,
            "commission": "10%"
        },
        {
            "accountId": "HU6TSsvA84GKrTiyArBHiFDVBSLHNr5Ki3qPV7T8WKyVJaz",
            "identity": {
                "display": "🍀ARISTOPHANES🍀",
                "legal": "AKIRA YASUKAWA",
                "web": "https://pythagoras-capital.net",
                "riot": "@pythagoras.c.i:matrix.org",
                "email": "subscr3zp@tutanota.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@PythagorasCI"
            },
            "staked": 106016812637196,
            "commission": "3%"
        },
        {
            "accountId": "HX6qEdgi3eFMasuBwtVFLKKtKVJzHAAK17pLyB7SxkxCASD",
            "identity": {
                "display": "dakkk",
                "legal": "",
                "web": "",
                "riot": "@dakkk:matrix.org",
                "email": "dak.linux@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@dagide"
            },
            "staked": 107700720873033,
            "commission": "10%"
        }
    ],
    "era": 3575
}
},{}]},{},[2]);
