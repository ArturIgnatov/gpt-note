import { ChangeEvent, FC, InputHTMLAttributes, memo, useCallback } from 'react';

interface IProps extends InputHTMLAttributes<any> {
  label?: string;
  onChangeText: (text: string) => void;
}

export const Input: FC<IProps> = memo(({ label, onChangeText, ...props }) => {
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChangeText(event.target.value);
    },
    [onChangeText],
  );

  return (
    <div>
      {!!label && (
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 dark:text-gray-300 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          onChange={onChange}
          {...{ props }}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
});
