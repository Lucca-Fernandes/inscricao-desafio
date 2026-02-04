'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

type SubscribeButtonProps = {
  formUrl: string;
};

export default function SubscribeButton({ formUrl }: SubscribeButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    window.open(formUrl, '_blank');
    setIsLoading(false);
  };

  return (
    <Button variant="outline" onClick={handleClick} disabled={isLoading}>
      Inscrever-se
    </Button>
  );
}
