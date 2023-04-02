'use client';

interface Props {
  onClick: () => void;
  label: string;
}

const MenuItem = ({ onClick, label }: Props) => {
  return (
    <div className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
      {label}
    </div>
  );
};

export default MenuItem;
