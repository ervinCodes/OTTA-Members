  // Button references
  const accountSetupButton = document.getElementById('account-setup-button');
  const popupOverlay = document.getElementById('popup-overlay');
  const closePopupButton = document.getElementById('close-popup');
  const submitButton = document.getElementById('submit-button');

  // Show popup
  accountSetupButton.addEventListener('click', () => {
    popupOverlay.classList.remove('hidden');
  });

  // Close popup
  closePopupButton.addEventListener('click', () => {
    popupOverlay.classList.add('hidden');
  });

  // Handle submit button
  submitButton.addEventListener('click', () => {
    alert('Thank you! Member flagged in Admin Dashboard.');
    // Hide the popup
    popupOverlay.classList.add('hidden');
    // Hide the Account Setup button
    accountSetupButton.style.display = 'none';
    // Simulate updating Admin Dashboard logic here
    console.log('Member flagged in Admin Dashboard.');
  });