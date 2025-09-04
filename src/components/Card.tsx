import type React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { RxCross2 } from 'react-icons/rx';
import { MdOutlineDownload } from "react-icons/md";
import type { DataItem } from "../types/DataTypes";

import { motion } from "framer-motion"

interface CardProps{
    data:DataItem;
    reference: React.RefObject<HTMLDivElement | null>
}

const Card = ({ data ,reference}:CardProps) => {
    return (
        <div >
            {/* Card Component */}
            <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className="w-48 h-56 rounded-3xl bg-gray-100 shadow-md flex flex-col overflow-hidden m-3">
                {/* FILE ICON */}
                <div className="px-4 pt-4">
                    <FaRegFileAlt className="text-lg" />
                </div>

                {/* STATIC TEXT */}
                <div className="px-4 mt-3 flex-1">
                    <p className="text-sm text-gray-800 leading-snug">
                        {data.desc}
                    </p>
                </div>

                {/* FOOTER */}
                <div className="px-4 mt-4 mb-2 flex justify-between items-center">
                    <span className="font-semibold text-sm text-gray-700">{data.filesize}</span>

                    {/* Close Button */}
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-200 cursor-pointer transition">
                        {data.close ? <RxCross2 className="text-gray-600 text-sm" /> : <MdOutlineDownload className="text-gray-600 text-sm" />}
                    </span>
                </div>


                {data.tag.isOpen && (
                    //DOWNLOAD NOW BTN
                    <div className={`h-10 ${data.tag.tagColor==='blue'?'bg-sky-500': 'bg-green-500'} flex items-center justify-center text-white text-sm font-medium cursor-pointer`}>
                        Download Now
                    </div>
                )}

            </motion.div>
        </div>
    )
}

export default Card