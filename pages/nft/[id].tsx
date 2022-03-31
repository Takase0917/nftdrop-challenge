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
                    object-cover lg:h-96 lg:w-72' src="https://mintable-downloadable-payloads.s3.amazonaws.com/000000-0000000002/100598039386987804754287261408270175088215538607303956307490088068393024910867/81bfb151-c14e-4e73-8c25-409bc674a24d_Hunting.peg.jpeg?AWSAccessKeyId=ASIAUXGGXLIGZYSWKZN2&Expires=1648761391&Signature=4SoPe%2FGd9PjxRcX0s12UaH1LrIM%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIGJhDSHScmHZYpVXI3lb0y%2Fgm179o7u3yzFCxZus4at9AiEA01YiY1PoUe2BltFlw3i8xALDWSZctKtI6sTZFnAtO4gqmAIIHhADGgwzMjQ2ODY3OTczMjUiDDNRH2D23if%2B2xsU9ir1Ad9yGP8tnFCFwyoeEEuOllpdLybLGlO5CmPGpFYCWUwzTxyzia56ZeFxhftA9PI6wPcYDEmb%2FVy06Ko%2Bg1xcCId9ur5mRdo0ykB67Hxp%2BctHIWgTERzErBFF6dw0ZtGijUDk6MThqx5rzJnOLyd1LCo96oebMNyjy4%2BDmfQvrAna9lx5ndEqtF%2FRs0PPLhXL8SUkCq0Qm8kMsfit0lKmbyrDvIfD2BgxQ2tO8G2mUbGOUGWDu6h9aMiiH4tJCe8uq3Sa265XoOxnNHPlF%2FpsFvn%2B8pd1dQ2kX8xgtl624QPFj6mRttR4s1ADaY51PaD1hQrSmVhWMKitmJIGOpoBxwr1ke59FsoUj82H0IgN1hQy4murBACv0Z64PGKVFDM9uXBzQ2pEHu10dZFNtpC0j7wIEPl2ttEvT4iYvkiwcAWdDcFZLdQp0fehtEOHf23oVxOaiLM3Ell58tCU67ND9sJG4LIrz5fdnJsDe6PUerIhUc5%2BlNYqK6zQ4k1YUhm%2FUpzQUdvh8G%2FQDYcEc1KG4%2BzbbIhezPIQFA%3D%3D" alt=""
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
                     lg:h-40' src="https://mintable-downloadable-payloads.s3.amazonaws.com/000000-0000000002/100598039386987804754287261408270175088215538607297340694940330150752136829205/81bfb151-c14e-4e73-8c25-409bc674a24d_theTwoBrothers.peg.jpeg?AWSAccessKeyId=ASIAUXGGXLIG2F25LMFJ&Expires=1648761692&Signature=CtRIYid33pljRQ8S%2B3ZIUcgf9fc%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCQ3m4xuW3CKggQdsZGeh4PC034XjfCvJOAFcOuYBsg1wIhAKxndEhGKJ7bS67II3UDyiJ6ZouSiL2PnZPeyxwnKEn9KpgCCB4QAxoMMzI0Njg2Nzk3MzI1Igw2X%2F%2FG%2F7bGPzAt2n8q9QGecILbqZuDE1vMUjlMGHrZVLqde1mzybqU71w1hdzatqHAIPZ5AXnSUeC5X%2FNMXslemDxTKtAg8yApVH2uLHlQpO8mpeeNOCdV0cYsVkpZw6vJbnbPLNQ0lKeHiIv2%2FkF3uCGd8UrTa6b0X3ozQm7tIRtBMlygH6afOxD2icAbQU9CZ69eSE5PfQatCw%2BLiOB%2BmlVs%2Flfw12dIUAr%2FceswnTtTDlPvExhJgZYfsMdLb6aqgUcDR7fcR%2BHrzb%2FcmA%2FWa8BJXZ67CkpYhq1QnpgHbmyd8NwqdwqzLZ98rkwfgxrHQ7VVhXAG%2BO0EKC8cCp8UJWVqjDDCrpiSBjqZAXP4CdCB6SapRDQ8getHa%2BpqebspMbVh2V8dmfOnEtYugGmuVy%2F2D3VNVpb0oPJPbnNkffM%2BGSjr55F%2FRKJIIwF6%2FGdQEEcizKAhj8xjuxDz6opr0A2Dap5BuQew1%2FBJcS3L%2FUk4jxKy00kvNBg9u1vOwqxBc3Trk2kynplTzWmfOlPisyRVgP08R3Ow1vvbmuOlsUpxi50hBw%3D%3D" alt="" />
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
