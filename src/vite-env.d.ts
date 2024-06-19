/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API: string
  readonly VITE_MODE: 'development' | 'production';
  readonly VITE_IMAGES_PATH: string;
  readonly VITE_WITH_ADMIN: 'admin' | 'default';
}
