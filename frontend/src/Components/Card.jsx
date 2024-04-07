import image from './comp.gif'
export function Card({bold , description}){
    return(
        <div className="flex justify-around items-center">
            <div className='w-6/12 p-12 mt-12 ' >
                <div className="text-6xl font-bold m-4">{bold}</div>
                <div className='text-2xl m-4'>{description}</div>
                <button className='bg-teal-200 p-3 rounded-xl px-5 m-4 text-xl'>Get started</button>
            </div>
            <div className='w-4/12 mr-12 m-6'>
                <img className='rounded-xl' src={image} alt="Image" />
            </div>
        </div>
    )
}