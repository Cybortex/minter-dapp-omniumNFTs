Moralis.initialize('O0dyqgnzFYTgl2b5INnhzGXUESl4i1umoWWUon8z')
Moralis.serverURL = 'https://x05mihnk2h3p.usemoralis.com:2053/server';


const authenticateButton = document.getElementById('connectWallet2')
const logoutButton =  document.getElementById('btn-logout') 
let user;
let web3;

function connectWallet2() {
  user = Moralis.User.current();

  if(user) {
    authenticateButton.style.display =  "none"
    logoutButton.style.display ="inline-block"
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

  async function logout() {
    try {
      await Moralis.Web3.logout();      
     } catch (error)  {
      console.log('logout fail', error);
      }
      connectWallet2();
    } 

  authenticateButton.onclick = authenticate;

  connectWallet2();