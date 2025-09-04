import { FaRegFileAlt } from "react-icons/fa";
import { RxCross2 } from 'react-icons/rx';

const Card = () => {
    return (
        <div>
            {/* Card Component */}
            <div className="w-48 h-56 rounded-3xl bg-white shadow-md flex flex-col overflow-hidden">
                {/* FILE ICON */}
                <div className="px-4 pt-4">
                    <FaRegFileAlt className="text-lg" />
                </div>

                {/* STATIC TEXT */}
                <div className="px-4 mt-3 flex-1">
                    <p className="text-sm text-gray-800 leading-snug">
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                </div>

                {/* FOOTER */}
                <div className="px-4 mt-4 mb-2 flex justify-between items-center">
                    <span className="font-semibold text-sm text-gray-700">1.4 Mb</span>

                    {/* Close Button */}
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition">
                        <RxCross2 className="text-gray-600 text-sm" />
                    </span>
                </div>


                {/* DOWNLOAD NOW BTN  */}
                {/* <div className="h-10 bg-green-500 flex items-center justify-center text-white text-sm font-medium cursor-pointer">
    Download Now
  </div> */}

                {/* PROGRESS BAR */}
                <div className="h-10 bg-blue-600 rounded-b-2xl flex items-center justify-center">
                    {/* Slim white progress track */}
                    <div className="w-4/5 h-1 bg-white/60 rounded-full overflow-hidden">
                        {/* Filled progress */}
                        <div className="h-full w-1/2 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card