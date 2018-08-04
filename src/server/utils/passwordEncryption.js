import bcrypt from 'bcrypt';


const saltRounds = 10;

export const hashPassword = (plainPassword) => {
  const hashedPassword = bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
};

export const validatePassword = (plainPW, hashedPW) => {
  const validated = bcrypt.compare(plainPW, hashedPW);
  return validated;
}

