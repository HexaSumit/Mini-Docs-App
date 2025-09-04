import Card from "./Card"

const Foreground = () => {
    return (
        <div>
            {/* FOREGROUND COMP */}
            <div className=' absolute inset-0 bg-gray-300/70 z-10 p-2'>
                <Card />
            </div>
        </div>
    )
}

export default Foreground