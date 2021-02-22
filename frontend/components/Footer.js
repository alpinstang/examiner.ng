import { config } from "../../config/config";

const Footer = () => {
  return (
    <div className="text-gray-700 text-center mx-auto">
      <div class="relative h-28 w-full">
        <div class="absolute inset-x-0 bottom-0">
          <p>&copy; {new Date().getFullYear()} Examiner Test Prep. </p>
          <p>
            Version {config.appVersion} | Created By{" "}
            <a className="underline" href="https://github.com/plantuns">
              Ola Gold
            </a>
            {" and "}
            <a className="underline" href="https://github.com/alpinstang">
              John McDonald
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
