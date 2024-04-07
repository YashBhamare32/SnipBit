export function MoreInfo({bold , description}){
    return(
        <div className="w-6/12 border-2 border-black m-12 mx-24 p-12 ">
            <div className="flex items-center justify-between text-4xl font-bold">{bold}</div>
            <div className="text-xl ">{description}</div>
        </div>
    )
}