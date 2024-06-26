const form = document.getElementById('fenster-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Verhindert das Standard-Formular-Verhalten

    // Sammle die Formular-Daten
    const formData = new FormData(form);

    // Erstelle ein Objekt mit den Formular-Daten
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    // Sende die Daten per E-Mail
    // Hier müsstest du eine E-Mail-Bibliothek verwenden, z. B. EmailJS
    // Weitere Details findest du in der Dokumentation von EmailJS: https://www.emailjs.com/
    // ... 

    // Zeige eine Erfolgsmeldung an
    alert('Die Daten wurden erfolgreich gesendet.');
});
