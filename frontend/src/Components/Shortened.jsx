export function Shortened({url}){
    return <div className="flex justify-center items-center px-12">
        <div className="bg-fuchsia-300 rounded-md m-2 p-2 text-white">Shortened URL:</div>
        <div className="p-2 m-2 border-2 flex-grow h-12">{url}</div>
    </div>
}