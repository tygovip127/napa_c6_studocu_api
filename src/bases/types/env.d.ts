declare let process: {
  cwd(): string;
  env: {
    NODE_ENV: 'development' | 'production';
    TZ: string;
    APP_NAME: string;
    PORT: number;
    API_PREFIX: string;
    FE_URL: string;
    PREMIUM_EXPIRE_DURATION: number;
    JWT_ACCESS_SECRET: string;
    JWT_REFRESH_SECRET: string;
    JWT_ACCESS_EXPIRES_IN: string;
    JWT_REFRESH_EXPIRES_IN: string;
    MAIL_HOST: string;
    MAIL_PORT: number;
    MAIL_USER: string;
    MAIL_PASSWORD: string;
    DEFAULT_MAIL_FROM: string;
    EMAIL_CONFIRMATION_PATH: string;
    DB_HOST: string;
    DB_PORT: number;
    DB_USER: string;
    DB_PASS: string;
    DB_NAME: string;
    JWT_VERIFICATION_SECRET: string;
    JWT_VERIFICATION_EXPIRES_IN: string;
    PRIVATE_TOKEN_SECRET: string;
    PRIVATE_TOKEN_EXPIRES_IN: number;
    MAX_FILE_SIZE: number;
    STORAGE_PROVIDE: string;
    CLOUDINARY_NAME: string;
    CLOUDINARY_API_KEY: string;
    CLOUDINARY_API_SECRET: string;
    CLOUDINARY_FOLDER_NAME: string;
  };
};
