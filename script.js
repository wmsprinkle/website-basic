// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
      });
    });
  }

  // Contact form handling
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(this);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        smsConsent: formData.get('sms-consent') ? 'Yes' : 'No'
      };

      // Compose mailto link
      const bodyLines = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || 'Not provided'}`,
        `SMS Opt-In: ${data.smsConsent}`,
        '',
        data.message
      ];
      const mailtoLink = `mailto:will@sprinkleindustries.net?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
      window.location.href = mailtoLink;
    });
  }
});