'use client';
import React, { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

const ClientOnly = ({ children }: Props) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
};

export default ClientOnly;
