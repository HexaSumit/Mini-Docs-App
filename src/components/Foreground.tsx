import Card from "./Card"
import type { DataItem } from "../types/DataTypes"

const Foreground = () => {
    const data:DataItem[]=[
        {
           desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.' ,
           filesize:'.9Mb',
           close:true, 
           tag:{isOpen:true,tagTitle:'Download Now',tagColor:'green'}
        },
        {
           desc: 'This is a second card and this is also draggable' ,
           filesize:'0.4Mb',
           close:false, 
           tag:{isOpen:false,tagTitle:'Download Now',tagColor:'green'}
        },
        {
           desc: 'This is third Card.This one is also draggable Check by moving the Card ' ,
           filesize:'.5Mb',
           close:true, 
           tag:{isOpen:true,tagTitle:'Download Now',tagColor:'blue'}
        },
    ]
    return (
        <div>
            {/* FOREGROUND COMP */}
            <div className=' absolute inset-0 z-10 p-2'>
                <div className=" flex gap-5 flex-wrap">
                    {data.map((item,index)=>(<Card data={item} key={index}/>))}
                </div>
            </div>
        </div>
    )
}

export default Foreground