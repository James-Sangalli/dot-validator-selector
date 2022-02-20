(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
    "validators": [
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
            "staked": 130579696012953,
            "commission": "5%"
        },
        {
            "accountId": "15tfUt4iQNjMyhZiJGBf4EpETE2KqtW1nfJwbBT1MvWjvcK9",
            "identity": {
                "display": "Tesla",
                "legal": "",
                "web": "",
                "riot": "",
                "email": "tesla.validation@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 50589639573652,
            "commission": "3%"
        },
        {
            "accountId": "1MrurrNb4VTrRJUXT6fGxHFdmwwscqHZUFkMistMsP8k5Nk",
            "identity": {
                "display": "🛡 DWELLIR DOT 🛡",
                "legal": "",
                "web": "https://dwellir.com",
                "riot": "@dwellir:matrix.org",
                "email": "info@dwellir.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@DwellirOfficial"
            },
            "staked": 56771557480770,
            "commission": "3%"
        },
        {
            "accountId": "12YFVu7E6v1EYv5XMKRLPg3UrTJAUMw68WxGgFNenRGEiXVJ",
            "identity": {
                "display": "We Trust",
                "legal": "",
                "web": "",
                "riot": "@thomas92911:matrix.org",
                "email": "thomas92911@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 51473599708679,
            "commission": "2.999%"
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
            "staked": 100177924986882,
            "commission": "3%"
        },
        {
            "accountId": "16UvTJteZiHfoGjzMK5fAxwZd3wkbsFb2C1SKsMLCtxRhNWv",
            "identity": {
                "display": "Mitch-Wariner",
                "legal": "",
                "web": "",
                "riot": "@mitch-wariner:matrix.org",
                "email": "dot.miners.science@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 51524973137125,
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
            "staked": 40784489327739,
            "commission": "10%"
        }
    ],
    "era": 629
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
            "staked": 116637600000000,
            "commission": "10%"
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
            "staked": 120678210043758,
            "commission": "10%"
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
            "staked": 100994911520573,
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
            "staked": 112100744404397,
            "commission": "2%"
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
            "staked": 2000000092743785,
            "commission": "5%"
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
            "staked": 105592874819797,
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
            "commission": "2%"
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
            "staked": 105241258318350,
            "commission": "10%"
        }
    ],
    "era": 3378
}
},{}]},{},[2]);
