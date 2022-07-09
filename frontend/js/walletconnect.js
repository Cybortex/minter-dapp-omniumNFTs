const authenticateButton = document.getElementById('connectWallet2')
  
let user;
let web3;

function connectWallet2() {
  user = Moralis.User.current();

  if(user) {
    authenticateButton.style.display =  "inline-block"
    authenticateButton.innerText = `✔ ...${user.get('username')}`;
   }

  if(web3)  {
    authenticateButton.style.display =  "inline-block"
    authenticateButton.innerText = `WalletConnect`;
   } 
}

async function authenticate()  {
  try {
    user = await Moralis.Web3.authenticate({provider: 'walletconnect'});
    web3 = await Moralis.Web3.enable({provider: 'walletconnect'});
   } catch (error)  {
    console.log('authenticate fail', error);
    }
    connectWallet2();
  }

  authenticateButton.onclick = authenticate;

  connectWallet2();