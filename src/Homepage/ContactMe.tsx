import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import MailIcon from '../Images/mail.png';

export default function ContactMe() {
  const IMAGE_SIZE = 30;
  return (
    <div className="pt-8 w-full">
      <h2 className="font-medium mb-2 text-xl">Contact Me :</h2>
      <div className="grid grid-cols-1 gap-2">
        <div className="col-span-1 flex items-center">
          <FaGithub className="w-8 h-8 mr-3 " />
          <a
            className="text-sm text-green-900 font-medium"
            target="_blank"
            href="https://github.com/dhruvanwd"
          >
            /dhruvanwd
          </a>
        </div>

        <div className="col-span-1 flex items-center">
          <FaLinkedin className="w-7 h-7 mr-3 text-purple-600" />
          <a
            className="text-sm text-green-900 font-medium"
            href="https://www.linkedin.com/in/72sumit-kumar/"
          >
            in/72sumit-kumar
          </a>
        </div>

        <div className="col-span-1 flex items-center">
          <img
            className="mr-3"
            height={IMAGE_SIZE}
            width={IMAGE_SIZE}
            src={MailIcon}
          />
          <a
            className="text-sm text-green-900 font-medium"
            target="_blank"
            href="mailto:dev.kumar.sumit@gmail.com"
          >
            dev.kumar.sumit@gmail.com
          </a>
        </div>

        <div className="col-span-1 flex items-center">
          <IoIosCall className="w-8 h-8 mr-3 " />
          <a className="text-sm text-green-900 font-medium" href="tel:7007962803">
            +91 7007962803
          </a>
        </div>
      </div>
    </div>
  );
}
