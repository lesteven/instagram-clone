import bcrypt from 'bcrypt';


const saltRounds = 10;

const hashPassword = (plainPassword) => {
  return bcrypt.hash(plainPassword, saltRounds);
}

export default hashPassword;
