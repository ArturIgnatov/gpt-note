import { FC } from 'react';

interface IProps {
  text: string;
  disabled?: boolean;
  align?: 'left' | 'center' | 'right';
  onClick: () => void;
}

export const Button: FC<IProps> = ({ text, align = 'center', onClick, disabled = false }) => {
  return (
    <button
      className={`
        flex
        w-full
        mt-4
        text-${align}
        justify-center
        rounded-md
        font-semibold
        text-white
        shadow-sm
        leading-6
        px-3
        py-1.5
        text-sm
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-indigo-600
        ${disabled ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-500 hover:text-white'}
      `}
      {...{ disabled, onClick }}
    >
      {text}
    </button>
  );
};
