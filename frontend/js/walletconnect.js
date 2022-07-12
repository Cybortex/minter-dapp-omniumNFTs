const Moralis = require("moralis");
import {useMoralis} from "@walletconnect/web3-provider";

Moralis.initialize('Ut7ueXcX5F4skNoCGhnlv4UEzBAN22fzhGQrqZU1')
Moralis.serverURL = 'https://xhttps://xokhrrruvxrw.usemoralis.com:2053/server05mihnk2h3p.usemoralis.com:2053/server';
Moralis.start({ serverUrl, appId });

const authenticateButton = document.getElementById('connectWallet2')


async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({
      provider: "walletconnect", 
      chainId: 137,
    mobileLinks: [
      "rainbow",
      "metamask",
      "argent",
      "trust",
      "imtoken",
      "pillar",
    ] 
    })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("maticAddress"));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}


  authenticateButton.onclick =  login();
  

