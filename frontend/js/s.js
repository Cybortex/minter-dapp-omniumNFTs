/* Moralis init code */
Moralis.initialize('O0dyqgnzFYTgl2b5INnhzGXUESl4i1umoWWUon8z')
      Moralis.serverURL = 'https://x05mihnk2h3p.usemoralis.com:2053/server';
      Moralis.start({ serverUrl, appId });




/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({
      signingMessage: "Log in using Moralis",
    })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}


async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;