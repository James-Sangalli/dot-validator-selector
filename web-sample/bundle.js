(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
    "validators": [
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
            "staked": 51367069498663,
            "commission": "2.9%"
        },
        {
            "accountId": "11AnciffJctDC28odTEjDVYP2yWyp6275WLbrAUHi2vJm9f",
            "identity": {
                "display": "AncibanciDOT",
                "legal": "",
                "web": "",
                "riot": "@ancibanci:matrix.org",
                "email": "ancibanci0@protonmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 101496381417329,
            "commission": "3%"
        },
        {
            "accountId": "15wepZh1jWNqxBjsgErm8HmYiE21n79c5krQJeTsYAjHddeM",
            "identity": {
                "display": "Sik | crifferent.de",
                "legal": "",
                "web": "",
                "riot": "@dev0_sik:matrix.org",
                "email": "simon.kraus@crifferent.de",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@dev0_sik"
            },
            "staked": 10000000000000,
            "commission": "3%"
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
            "staked": 38073712806786,
            "commission": "10%"
        },
        {
            "accountId": "12dvyqCFhVubTDqMdojyjhkxVUMaYVXWLv8uZW1NomUunPmN",
            "identity": {
                "display": "Nodeasy",
                "legal": "",
                "web": "",
                "riot": "@crabbean:matrix.org",
                "email": "wenzhihao@bitopia.cn",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@Nodeasy"
            },
            "staked": 101450322733298,
            "commission": "3%"
        },
        {
            "accountId": "15UyiZ9rYhrX39Rasc1iE4sdME7WHNFSj8RQT3yuuytd3Nrd",
            "identity": {
                "display": "KIRA Staking",
                "legal": "Kira Core JSC",
                "web": "http://kiracore.com",
                "riot": "@kiracore:matrix.org",
                "email": "partners@kiracore.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@kira_core"
            },
            "staked": 124303688192249,
            "commission": "3%"
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
        },
        {
            "accountId": "15BZW721S3fzMYT8vY3Dt2sVXNTECqwHQ1bNUM8q4fi7EVcc",
            "identity": {
                "display": "ilgio",
                "legal": "",
                "web": "https://poolgio.com",
                "riot": "@ilgio:matrix.org",
                "email": "ilgio@poolgio.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 51148370577454,
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
            "staked": 129399964578762,
            "commission": "5%"
        }
    ],
    "era": 626
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
            "commission": "2%"
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
            "staked": 100098346487573,
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
            "accountId": "FSUwnu7Ehf7sKByaXvSTYoAfuTxybwqhubeGfQkho94syqo",
            "identity": {
                "display": "Web3 VC",
                "legal": "Web3 Venture Capital",
                "web": "https://web3.vc",
                "riot": "@web3.vc:matrix.org",
                "email": "hi@web3.vc",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@VentureWeb3"
            },
            "staked": 2372470551513860,
            "commission": "10%"
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
            "staked": 101915572326364,
            "commission": "6%"
        },
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
            "staked": 111723785320615,
            "commission": "2%"
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
            "staked": 104798433056193,
            "commission": "10%"
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
            "staked": 4008684796188462,
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
            "staked": 119865923698888,
            "commission": "10%"
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
            "staked": 104363846764723,
            "commission": "10%"
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
            "staked": 4085000000000000,
            "commission": "5%"
        },
        {
            "accountId": "DY3hczPcJjHXScXkKwJZ7vgqTE4bZaCUa56XsAQH8gDzB7x",
            "identity": {
                "display": "♞GameTheory♜",
                "legal": "",
                "web": "https://gametheory.me",
                "riot": "@game.theory:matrix.org",
                "email": "mail@gametheory.me",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 103037167472598,
            "commission": "10%"
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
        }
    ],
    "era": 3366
}
},{}]},{},[2]);
