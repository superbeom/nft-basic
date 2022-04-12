import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const NFTDropPage = () => {
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();

    return (
        <div className='flex flex-col h-screen lg:grid lg:grid-cols-10'>
            {/* Left */}
                <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
                    <div className='flex flex-col justify-center items-center py-2 lg:min-h-screen'>
                        <div className='rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2'>
                            <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72' src="https://links.papareact.com/8sg" alt="" />
                        </div>

                        <div className='text-center p-5 space-y-2'>
                            <h1 className='text-4xl font-bold text-white'>Heungdo Lab</h1>
                            <h2 className='text-xl text-gray-300'>A collection of Heungdo Lab who live & breathe React!</h2>
                        </div>
                    </div>
                </div>

            {/* Right */}
            <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
                    {/* Header */}
                    <header className='flex items-center justify-between'>
                        <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>
                            The{" "}
                            <span className='font-extrabold underline decoration-pink-600/50'>Heungdo Lab</span>
                            {" "}NFT Market Place
                        </h1>

                        <button onClick={address ? disconnect : connectWithMetamask} className='rounded-full bg-rose-400 px-4 py-2 text-white text-xs font-bold lg:px-5 lg:py-3 lg:text-base'>{address ? 'Sign Out' : 'Sign In'}</button>
                    </header>

                    <hr className='my-2 border' />
                    {address && <p className='text-center text-sm text-rose-400'>You're logged in with wallet {address}</p>}

                    {/* Content */}
                    <div className='flex flex-1 flex-col items-center space-y-6 mt-10 text-center lg:space-y-0 lg:justify-center'>
                        <img className='w-80 object-cover pb-10 lg:h-40' src="https://links.papareact.com/bdy" alt="" />

                        <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The HeungdoLab Coding Club | NFT Drop</h1>

                        <p className='pt-2 text-green-500 text-xl'>13 / 21 NFT's claimed</p>
                    </div>

                    {/* Mint Button */}
                    <button className='h-16 w-full bg-red-600 rounded-full text-white mt-10 font-bold'>Mint NFT (0.01 ETH)</button>
            </div>
        </div>
    )
}

export default NFTDropPage