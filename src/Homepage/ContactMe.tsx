import CallIcon from '../Images/call.png';
import GitIcon from '../Images/github.png';
import LinkedInIcon from '../Images/linkedin.png';
import MailIcon from '../Images/mail.png';
import WhatsappIcon from '../Images/whatsapp.png';

export default function ContactMe() {
  const IMAGE_SIZE = 30;
  return (
    <div className="pt-8 w-full">
      <h2 className="font-medium mb-2 text-xl">Contact Me :</h2>
      <div className="grid grid-cols-1 gap-2">
        <div className="col-span-1 flex items-center">
          <img
            className="mr-2"
            height={IMAGE_SIZE}
            width={IMAGE_SIZE}
            src={GitIcon}
          />
          <a
            className="text-sm font-medium"
            target="_blank"
            href="https://github.com/dhruvanwd"
          >
            /dhruvanwd
          </a>
        </div>

        <div className="col-span-1 flex items-center">
          <img
            className="mr-2"
            height={IMAGE_SIZE}
            width={IMAGE_SIZE}
            src={LinkedInIcon}
          />
          <a
            className="text-sm font-medium"
            href="https://www.linkedin.com/in/72sumit-kumar/"
          >
            in/72sumit-kumar
          </a>
        </div>

        <div className="col-span-1 flex items-center">
          <img
            className="mr-2"
            height={IMAGE_SIZE}
            width={IMAGE_SIZE}
            src={MailIcon}
          />
          <a
            className="text-sm font-medium"
            target="_blank"
            href="mailto:dev.kumar.sumit@gmail.com"
          >
            dev.kumar.sumit@gmail.com
          </a>
        </div>

        <div className="col-span-1 flex items-center">
          <img
            className="mr-2"
            height={IMAGE_SIZE}
            width={IMAGE_SIZE}
            src={CallIcon}
          />
          <a className="text-sm font-medium" href="tel:7007962803">
            +91 7007962803
          </a>
        </div>
      </div>
    </div>
  );
}
