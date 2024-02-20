export default function Header() {
    return (
        <div className='flex ps-20 p-2 md:justify-between justify-between border-2 border-x-0 '>
            <h2 className='text-base md:text-xl font-medium text-[rgb(247,87,72)]'>Product Page</h2>
            <input type="text" className='p-1 md:p-2 w-1/2 md:w-auto rounded-full text-white outline-none text-center bg-black placeholder:text-white' placeholder='search' />
        </div>
    );
}