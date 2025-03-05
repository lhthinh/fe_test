export const IconPaths = {
  logo: 'assets/icons/svg/logo.svg',
  favicon: 'assets/icons/favicon/favicon.ico',
  // Add more icon paths here
} as const;

export type IconName = keyof typeof IconPaths;
