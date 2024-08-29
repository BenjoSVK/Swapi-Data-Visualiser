import React from 'react';
import { Button } from '@chakra-ui/react';

interface FetchButtonProps {
  label: string;
  endpoint: string;
  onClick: (endpoint: string) => void;
}

const FetchButton: React.FC<FetchButtonProps> = ({ label, endpoint, onClick }) => {
  return (
    <Button onClick={() => onClick(endpoint)}>
      {label}
    </Button>
  );
};

export default FetchButton;
