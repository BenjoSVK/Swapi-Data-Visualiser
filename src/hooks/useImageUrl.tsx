import { createContext, useContext } from 'react';

// Create a context with a default value (e.g., an empty string)
const ImageUrlContext = createContext<string>('');

export const ImageUrlProvider = ImageUrlContext.Provider;

// Optional hook for accessing the context easily
export const useImageUrl = () => useContext(ImageUrlContext);
