import './styles.css';
import { Menu } from '@headlessui/react';
import { classNames } from '@shared/lib';
import { DropdownMenu } from '@shared/ui/dropdown';

export const Dialog = () => {
  return (
    <div className="flex-1 justify-between flex flex-col pt-4 px-2">
      <div className="h-16 flex justify-between items-center w-full px-2 py-2 shadow-sm">
        <div className="flex items-center">
          <img
            className="h-10 w-10 overflow-hidden rounded-full"
            src="https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png"
            alt=""
          />
          <p className="font-semibold ml-3 text-black dark:text-white">Leslie Alexander</p>
        </div>
        <div className="flex items-center space-x-5">
          <Menu>
            <Menu.Button className="inline-flex items-center justify-center rounded-full h-8 w-8 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </Menu.Button>
            <DropdownMenu
              className="top-14 right-8"
              buttons={[
                { text: 'Remove', onClick: () => '' },
                { text: 'Clear', onClick: () => '' },
              ]}
            />
          </Menu>
        </div>
      </div>
      <div className="w-full rounded-full h-1 bg-gray-300 dark:bg-gray-700 px-20" />
      <div
        id="messages"
        className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-w-2 scrolling-touch"
      >
        <Message text="Can be verified on any platform using docker" />
        <Message
          text="Your error message says permission denied, npm global installs must be given root privileges."
          isMy
        />
        <Message text="Command was run with root privileges. I'm sure about that." />
        <Message text="I've update the description so it's more obviously now" />
        <Message text="FYI https://askubuntu.com/a/700266/510172" />
        <Message text="Check the line above (it ends with a # so, I'm running it as root ) # npm install -g @vue/devtools" />
        <Message
          text="Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks"
          isMy
        />
        <Message text="Thanks for your message David. I thought I'm alone with this issue. Please, ? the issue to support it :)" />
        <Message text="Are you using sudo?" isMy />
        <Message
          text="Run this command sudo chown -R `whoami` /Users/.npm-global/ then install the package globally without using sudo"
          isMy
        />
        <Message text="It seems like you are from Mac OS world. There is no /Users/ folder on linux ?" />
        <Message text="I have no issue with any other packages installed with root permission globally." />
        <Message
          text="yes, I have a mac. I never had issues with root permission as well, but this helped me to solve the problem"
          isMy
        />
        <Message text="I get the same error on Arch Linux (also with sudo)" />
        <Message text="I also have this issue, Here is what I was doing until now: #1076" />
        <Message text="even i am facing" />
      </div>
      <div className="w-full rounded-full h-1 bg-gray-300 dark:bg-gray-700 px-20" />
      <div className="items-start p-2 px-1">
        <div className="relative">
          <span className="absolute inset-y-0 flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full h-8 w-8 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </button>
          </span>
          <input
            type="text"
            placeholder="Your question...."
            className="w-full dark:text-gray-300 placeholder-gray-600 text-sm ring-0 focus:ring-0 pl-12 bg-transparent border-transparent focus:border-transparent py-2"
          />
          <div className="absolute right-0 items-center inset-y-0 hidden p-2 sm:flex">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full h-8 w-8 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 16"
                fill="currentColor"
                className="h-6 w-6 ml-2 transform rotate-90"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Message = ({ text, isMy }: { text: string; isMy?: boolean }) => {
  return (
    <div className="chat-message">
      <div className={classNames(isMy ? 'justify-end' : '', 'flex items-end')}>
        <div
          className={classNames(
            isMy ? 'order-1 items-end' : 'order-2 items-start',
            'flex flex-col space-y-2 text-sm max-w-xs mx-2',
          )}
        >
          <div>
            <span
              className={classNames(
                isMy
                  ? 'bg-indigo-600 text-white rounded-br-none'
                  : 'bg-gray-200 dark:bg-gray-800 dark:text-gray-100 rounded-bl-none',
                'px-4 py-2 rounded-lg inline-block',
              )}
            >
              {text}
            </span>
          </div>
        </div>
        <img
          src={
            isMy
              ? 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              : 'https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png'
          }
          alt="My profile"
          className={classNames(isMy ? 'order-2' : 'order-1', 'w-6 h-6 rounded-full')}
        />
      </div>
    </div>
  );
};
