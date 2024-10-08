import * as dotenv from 'dotenv';

dotenv.config();

const PORT = parseInt(process.env.PORT ?? '3003', 10);
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
const JWT_ACCESS_EXPIRES_IN = process.env.JWT_ACCESS_EXPIRES_IN;
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN;
const FE_URL = process.env.FE_URL ?? 'http://localhost:3000';
const PREMIUM_EXPIRE_DURATION = parseInt(
  process.env.PREMIUM_EXPIRE_DURATION ?? '86400000',
  10,
);
const DB_HOST = process.env.DB_HOST ?? 'localhost';
const DB_PORT = parseInt(process.env.DB_PORT ?? '5432', 10);
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const JWT_VERIFICATION_SECRET = process.env.JWT_VERIFICATION_SECRET;
const JWT_VERIFICATION_EXPIRES_IN = process.env.JWT_VERIFICATION_EXPIRES_IN;
const EMAIL_CONFIRMATION_PATH = process.env.EMAIL_CONFIRMATION_PATH;
const PRIVATE_TOKEN_SECRET = process.env.PRIVATE_TOKEN_SECRET;
const PRIVATE_TOKEN_EXPIRES_IN = parseInt(
  process.env.PRIVATE_TOKEN_EXPIRES_IN ?? '600000',
  10,
);
const MAX_FILE_SIZE = parseInt(process.env.MAX_FILE_SIZE ?? '20', 10);
const STORAGE_PROVIDE = process.env.STORAGE_PROVIDE;
const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
const CLOUDINARY_FOLDER_NAME = process.env.CLOUDINARY_FOLDER_NAME;

export {
  PORT,
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  JWT_ACCESS_EXPIRES_IN,
  JWT_REFRESH_EXPIRES_IN,
  FE_URL,
  PREMIUM_EXPIRE_DURATION,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASS,
  DB_NAME,
  JWT_VERIFICATION_SECRET,
  JWT_VERIFICATION_EXPIRES_IN,
  EMAIL_CONFIRMATION_PATH,
  PRIVATE_TOKEN_SECRET,
  PRIVATE_TOKEN_EXPIRES_IN,
  MAX_FILE_SIZE,
  STORAGE_PROVIDE,
  CLOUDINARY_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_FOLDER_NAME,
};
