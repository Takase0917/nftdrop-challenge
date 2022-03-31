import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

function NFTDropPage() {
    //Auth
    const connectWithMetamask = useMetamask()
    const address = useAddress()
    const disconnect = useDisconnect()

    console.log(address)
    return (
        <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
            {/* left */}
            <div className='lg:col-span-4 bg-gradient-to-br from-black
            to-rose-500'>
                <div className='flex flex-col items-center 
                justify-center py-2 lg:min-h-screen'>
                    <div className='rounded-xl bg-gradient-to-br from-yellow-500 to-blue-900 p-2'>
                        <img className='w-44 rounded-xl 
                    object-cover lg:h-96 lg:w-72' src="https://mintable-downloadable-payloads.s3.amazonaws.com/000000-0000000002/100598039386987804754287261408270175088215538607303956307490088068393024910867/81bfb151-c14e-4e73-8c25-409bc674a24d_Hunting.peg.jpeg?AWSAccessKeyId=ASIAUXGGXLIGYU2XLDP7&Expires=1648762567&Signature=4fpnmHvP6Gh%2Fia%2FSH4941f0YxTU%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDFdrckKORc9AAOvYUQ43A22WDlL%2FpJNC2bHDdPn6I0RAiEAvZZjoMTrbngQpxUpXvu%2FUBZjBq34ZtOn5JLotDL1K1MqmAIIHhADGgwzMjQ2ODY3OTczMjUiDC4mQBubxnW5NFx94yr1AQWXwVxliP8hM0zFGEi1D%2BntNb78Hq2H%2BOAd7wfP2xFIkojj4S6cJHQrxKzXA5ZPQeyU7wVlEh6wA1hKq3rcGemWwpNJb2fhio0LJoqJXbR1uAjLo3Mq0UoUYrBWgOG8p6F%2Fv4BK08Gk3dKCa7VsVs%2F4XdBMRHiJT2wMutn1SBUHGadFrn3yxOW8zc6PA1OCtfSakXwlTavIC1DV48tWcFggI%2Br%2FIyQThiv3ef8c7uzCZXlqnZ9o1OfwmVD5eBr77yjQspDFzaVA6BFb1Ob2b8jtTVrxiIUmez1QBIcricWNwRWIitMa5%2Bu7CqbNx7uFy%2F4uSZQtML62mJIGOpoBVAivoAvZRu%2B2NFig0DUG81BuKuhYfJ94aUe1Kc%2F7OPp0aSlj0Yvu7kvnZvhja0pOuo8B59T3wr1p9vfOMGGkl1HimONBNU3IVUlGkBzcMLGjX61b4uJuca73ULXuNsXRCxoQX1bu3eSQu3aDw4IpdMMHdQZiD6WiL5R%2BneMIMZa9o%2Bkfz498dYuTN1r%2FJP8%2Fhexx7yYaWh9DCw%3D%3D" alt=""
                        />

                    </div>
                    <div className='text-center p-5 space-y-2'>
                        <h1 className='text-4xl font-bold text-white'>
                            Taka Apes
                        </h1>
                        <h2 className='text-xl text-gray-300'>
                            A collection of Taka Apes who live & breathe React!
                        </h2>
                    </div>
                </div>
            </div>

            {/* right */}
            <div className='flext flex-1 flex-col p-12 lg:col-span-6'>
                {/* header */}
                <header className='flex items-center justify-between'>
                    <h1 className='w-52 cursor-pointer text-xl
                     font-extralight sm:w-80'>
                        The{' '}
                        <span className='font-extrabold 
                        underline decoration-pink-600/50'>
                            TAKA
                        </span>{' '}
                        NFT market place
                    </h1>

                    <button onClick={() => address ? disconnect() : connectWithMetamask()}
                        className='rounded-full bg-rose-400
                     py-2 text-white
                    px-4 text-xs font-bold lg:px-5 lg:py-3 
                     lg:text-base
                    '>{address ? 'Sign Out' : 'Sign In'}</button>

                </header>

                <hr className='my-2 border' />
                {address && (
                    <p className='text-center text-sm text-rose-400'>You are logged in with wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}</p>
                )}
                {/* contents */}
                <div className='mt-10 flex flex-1 flex-col items-center space-y-6 
                 text-center lg:space-y-0 lg:justify-center'>
                    <img className='w-80 object-cover pb-10 
                     lg:h-40' src="http://personal.rhul.ac.uk/zkac/332/Screenshot%202022-03-31%20at%2022.31.20.png" alt="" />
                    <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>
                        The TAKA ape coding club
                    </h1>
                    <p className='pt-2 text-xl text-green-500'>13/21 NFT's claimed</p>
                </div>
                {/* mint button */}
                <button className='h-16 w-full bg-red-600 text-white
                 rounded-full mt-10 font-bold'>
                    Mint NFT (0.01 ETH)
                </button>
            </div>

        </div>
    )
}

export default NFTDropPage
