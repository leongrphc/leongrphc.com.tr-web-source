const nextBtn = document.getElementById('next-btn');
const newProfileCard = document.getElementById('new-profile-card');
const profileCard = document.getElementById('profile-card');

nextBtn.addEventListener('click', () => {
  // Profil kartını gizle
  profileCard.style.display = 'none';
  
  // Yeni profil kartını göster
  newProfileCard.classList.add('show');
  newProfileCard.classList.remove('hide');
});

document.querySelector('.submit-btn').addEventListener('click', function (e) {
  e.preventDefault(); // Form gönderimini engeller (test için)
  this.classList.add('clicked');

  setTimeout(() => {
    this.classList.remove('clicked');
    alert("Mesajınız gönderildi!"); // Geri bildirim mesajı
  }, 300);
});

