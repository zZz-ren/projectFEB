import { useRouteError } from 'react-router-dom'

export default function Error() {

    const error = useRouteError()
    console.error(error);
    return (
        <div className="w-full h-screen flex justify-center text-center items-center">
            <div className='rounded-lg p-15 space-y-2 shadow-lg'>
                <h1 className='text-2xl'>Oops!</h1>
                <p className='text-lg bg-red-600 text-white rounded-lg p-1'>Sorry, an unexpected error has occurred.</p>
                <p className=' text-red-600'>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    )
}
