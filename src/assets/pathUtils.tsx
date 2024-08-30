export const normalizePath = (path: string): string => path.toLowerCase();

export const isActivePath = (currentPath: string, targetPath: string): boolean => 
  normalizePath(currentPath) === normalizePath(targetPath);

export const activePaths = [
  "/people",
  "/planets",
  "/films",
  "/species",
  "/vehicles",
  "/starships",
];