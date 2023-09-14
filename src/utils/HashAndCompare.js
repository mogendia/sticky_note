import bcrypt from "bcryptjs";

export const hash = ({
  plainText,
  saltRound = process.env.SALT_ROUND,
} = {}) => {
  const hashResult = bcrypt.hashSync(plainText, parseInt(saltRound));
  return hashResult;
};

export const compare = ({ plainText, hashValue } = {}) => {
  const compareResult = bcrypt.compareSync(plainText, hashValue);
  return compareResult;
};
