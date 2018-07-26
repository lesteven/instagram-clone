import bcrypt from 'bcrypt';


const saltRounds = 10;

const hashPassword = (plainPassword) => {
  const hashedPassword = bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
};

export default hashPassword;
