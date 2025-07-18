const mongoose = require('mongoose');
console.log('Server start...');

// Gebruik je EXACTE connectie-string hier
const uri = "mongodb+srv://Roger:wFqnTbPiMzbAJxfA@roger.czohxdg.mongodb.net/thecompanydb?retryWrites=true&w=majority&appName=Roger";

console.log('Proberen te verbinden met MongoDB Atlas...');

mongoose.connect(uri, {
    tls: true,
    tlsAllowInvalidCertificates: true
}).then(() => {
    console.log('✅ SUCCES! Verbinding met MongoDB is gelukt!');
    process.exit(0);
}).catch(err => {
    console.error('❌ FOUT! Verbinding met MongoDB is mislukt.');
    console.error(err);
    process.exit(1);
});
