import { FaMapMarkedAlt, FaMailBulk } from "react-icons/fa";

export function Contact() {
  return (
    <>
      <div className="container flex justify-center items-center max-w-full">
        <div className="py-24 w-3/5">
          <h1 className="text-blue-500 font-extrabold text-lg">CONTACT</h1>
          <h2 className="font-bold text-2xl">Don't be shy! Hit me up! 👇</h2>

          <div className="flex py-12 flex-wrap">
            <div className="flex space-x-2 items-center max-w-full p-4">
              <FaMapMarkedAlt class="fill-blue-500 text-3xl" />
              <div className="">
                <h3 className="font-bold text-lg">Location</h3>
                <p>Belo Horizonte, Brazil</p>
              </div>
            </div>

            <div className="flex flex-wrap space-x-2 items-center max-w-full p-4">
              <FaMailBulk class="fill-blue-500 text-3xl" />
              <div>
                <h3 className="font-bold text-base">Mail</h3>
                <p>felipenegreirosadv@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
