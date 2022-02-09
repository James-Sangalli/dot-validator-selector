const latestKsm = require("./ksm/latest.json");
const latestDot = require("./dot/latest.json");
const { ApiPromise, WsProvider} = require("@polkadot/api");
const { web3Accounts, web3Enable, web3FromAddress } = require('@polkadot/extension-dapp');

document.addEventListener("DOMContentLoaded", async () => {

    let data;
    let nodeUrl;
    let accountsLoaded = false;

    document.getElementById("submit").addEventListener("click", () => {
        document.getElementById("status").hidden = false;
        const isKSM = document.getElementById("KSM").checked;
        if(isKSM) {
            nodeUrl = "wss://kusama.api.onfinality.io/ws?apikey=09f0165a-7632-408b-ba81-08f964b607f7";
            data = latestKsm;
        } else {
            nodeUrl = "wss://polkadot.api.onfinality.io/ws?apikey=09f0165a-7632-408b-ba81-08f964b607f7";
            data = latestDot;
        }
        document.getElementById("validators").innerText = data.validators.map((v, i) => {
            return `${++i}. address: ${v.accountId} commission: ${v.commission} name: ${v.identity.display}`;
        }).join("\n");
        document.getElementById("status").innerText = `Validators meeting the criteria in era ${data.era}`;
        loadAccountsForNomination().catch(alert);
    });

    async function loadAccountsForNomination() {
        if(accountsLoaded) return;
        await web3Enable("dot-validator-selector");
        const allAccounts = await web3Accounts();
        let nominateDiv = document.createElement("div");
        nominateDiv.id = "nominate";
        nominateDiv.innerHTML = `
                <button id="nominateButton">Nominate</button>
                <label for="accounts">Choose an Account:</label>
                <select name="accounts" id="accounts">
                    ${allAccounts.map((a) => {
                        return `<option value=${a.address}>${a.address}</option>`
                    })}
                </select>`

        document.getElementById("container").appendChild(nominateDiv);
        accountsLoaded = true;
    }

    document.getElementById("nominateButton").addEventListener("click", async () => {
        const selectedAccount = document.getElementById("accounts").value;
        const injector = await web3FromAddress(selectedAccount);
        const api = await ApiPromise.create({ provider: new WsProvider(nodeUrl) });
        api.setSigner(injector.signer);
        const targets = data.validators.map((v) => {
            return v.accountId;
        });
        await api.tx.staking.nominate(targets).signAndSend(allAccounts[0].address);
    });

});