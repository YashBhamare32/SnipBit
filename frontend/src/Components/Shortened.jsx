export function Shortened({url}){
    return <div className="justify-center items-center text-xl m-12 flex">
        {/* <div className="justify-center flex">Shortened Url</div> */}
        <div className="p-4 flex w-auto max-w-full h-12 bg-white rounded-md items-center">
            {url}
        </div>
        <button className="bg-teal-200 p-2 px-4 mx-2 rounded-md">Copy</button>
    </div>
}