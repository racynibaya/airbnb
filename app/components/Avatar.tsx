'use client';

import Image from 'next/image';

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  const imageUrl = src ? src : '/images/placeholder.jpg';
  return (
    <Image
      className='rounded-full h-auto w-auto'
      height='30'
      width='30'
      alt='Avatar'
      src={imageUrl}
    />
  );
};

export default Avatar;
