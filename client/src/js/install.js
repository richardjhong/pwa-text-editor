const butInstall = document.getElementById("buttonInstall");
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();

  // Store the triggered events
  window.deferredPrompt = event;

  // Remove the hidden class from the button.
  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
  console.log('prompt has been activated')
  
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  // Clear prompt
 window.deferredPrompt = null;
}); 
