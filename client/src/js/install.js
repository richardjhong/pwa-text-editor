const butInstall = document.getElementById("buttonInstall");
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();

  // Store the triggered events
  deferredPrompt = event;

  // Remove the hidden class from the button.
  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
  console.log('prompt has been activated')

  if (!deferredPrompt) {
    console.log('return is being hit')
   return;
  }

  // Show prompt
  deferredPrompt.prompt();
 
  
  // Reset the deferred prompt variable, it can only be used once.
  deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  // Clear prompt
 deferredPrompt = null;
}); 
