import Image from "next/image";
import navb from "../public/assets/images/aa.jpeg";
import Banner from '@/components/banner/banner';
export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-4/6 max-2xl:w-5/6 max-lg:w-full">
        <Banner />
      </div>
      {/* <div className="max-w-[1200px] flex justify-between items-center w-full relative">
        <div className="h-[450px]  w-full px-16 flex justify-center items-center">
          <div className="bg-white  rounded-md h-5/6 w-full shadow-lg black flex justify-center items-center">
            <div className="flex justify-start items-start flex-col w-[35%] h-full px-9 py-24">
              <p className="text-xl font-medium text-slate-700 leading-10">
                Merrel ürünlerinde indirim
              </p>
              <p className="text-4xl font-semibold text-slate-700 leading-10">
                sepette 15% net indirim.
              </p>
              <button className="mt-5 bg-fuchsia-700 px-5 py-2 rounded-3xl text-white font-semibold">
                Alışverişe başla
              </button>
            </div>
            <div className="flex justify-start items-start w-[65%] h-full">
              <div className="w-full h-full p-1">
                <Image
                  src={navb}
                  alt="nav"
                  className="rounded-lg w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
