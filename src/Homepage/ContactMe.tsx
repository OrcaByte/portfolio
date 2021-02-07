import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import MailIcon from '../Images/mail.png';
import { useStateListner } from './Utils';

export default function ContactMe() {
  const [state] = useStateListner();

  const IMAGE_SIZE = 30;
  return (
    <div className="pt-6 w-full">
      <h2 className="font-medium mb-2 text-xl text-center md:text-black md:text-left text-white">
        Contact Me :
      </h2>
      <div className={'grid gap-2 grid-cols-1'}>
        <div className="col-span-1 flex items-center">
          <FaGithub className="w-8 h-8 mr-3 " />
          <a
            className="text-sm text-white md:text-green-900 font-medium"
            rel="noreferrer"
            target="_blank"
            href={state.contactDetails.github.url}
          >
            {state.contactDetails.github.display}
          </a>
        </div>

        <div className="col-span-1 flex items-center">
          <FaLinkedin className="w-7 h-7 mr-3 text-purple-600" />
          <a
            className="text-sm text-white md:text-green-900 font-medium"
            href={state.contactDetails.linkedIn.url}
            rel="noreferrer"
            target="_blank"
          >
            {state.contactDetails.linkedIn.display}
          </a>
        </div>

        <div className="col-span-1 flex items-center">
          <img
            className="mr-3"
            height={IMAGE_SIZE}
            width={IMAGE_SIZE}
            src={MailIcon}
            alt="mail_icon"
          />
          <a
            className="text-sm text-white md:text-green-900 font-medium"
            rel="noreferrer"
            target="_blank"
            href={state.contactDetails.mail.url}
          >
            {state.contactDetails.mail.display}
          </a>
        </div>

        <div className="col-span-1 flex items-center">
          <IoIosCall className="w-8 text-white md:text-green-900 h-8 mr-3 " />
          <a
            className="text-sm text-white md:text-green-900 font-medium"
            href={state.contactDetails.mobile.url}
          >
            {state.contactDetails.mobile.display}
          </a>
        </div>
      </div>
    </div>
  );
}
