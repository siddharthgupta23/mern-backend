

const bcrypt = require('bcryptjs');

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}
const plainPassword = 'yourPlainTextPassword'; // Replace with your password
hashPassword(plainPassword)
  .then((hashedPassword) => {
    console.log('Hashed Password:', hashedPassword);
    // Save hashedPassword to the database
  })
  .catch((error) => console.error(error));
