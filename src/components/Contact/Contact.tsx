import { FaMapMarkedAlt, FaMailBulk } from "react-icons/fa";

export function Contact() {
  return (
    <div className="flex justify-center" id="contact">
      <div className="container mx-auto py-16 max-w-full w-full md:w-3/5 px-4">
        <h1 className="text-blue-500 font-extrabold text-lg">CONTACT</h1>
        <h2 className="font-bold text-2xl">Don't be shy! Hit me up! 👇</h2>

        <div className="flex flex-wrap py-6">
          <div className="flex items-center w-full md:w-auto p-4">
            <FaMapMarkedAlt className="fill-blue-500 text-3xl" />
            <div className="ml-2">
              <h3 className="font-bold text-lg">Location</h3>
              <p className="cursor-pointer hover:text-blue-500">
                Belo Horizonte, Brazil
              </p>
            </div>
          </div>

          <div className="flex items-center w-full md:w-auto p-4">
            <FaMailBulk className="fill-blue-500 text-3xl" />
            <div className="ml-2">
              <h3 className="font-bold text-base">Mail</h3>
              <a
                href="mailto:felipenegreirosadv@gmail.com"
                className="hover:text-blue-500"
              >
                felipenegreirosadv@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
