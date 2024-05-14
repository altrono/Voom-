'use client'
import { proceedPayment } from '@/actions/payment.actions'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import useScript from 'react-script-hook/lib/use-script'

const Coffee = () => {
  const router = useRouter();
  const [isLoading, setIsloading] = useState(false)
  // useScript({
  //   src: 'https://js.yoco.com/sdk/v1/yoco-sdk-web.js',
  //   onload: () => {

  //     // eslint-disable-next-line no-undef
  //     // @ts-ignore
  //     const yoco = new YocoSDK({
  //       publicKey: 'pk_test_6ea1b4dcwEXXeWoacab4',
  //     })

  //     var checkoutButton = document.querySelector('#pay-button');
  //     // @ts-ignore
  //     checkoutButton.addEventListener('click', function () {
  //       yoco.showPopup({
  //         amountInCents: 2799,
  //         currency: 'ZAR',
  //         name: 'Your Store',
  //         description: 'Awesome description',
  //         displayMethod: 'MANUAL',
  //         // @ts-ignore
  //         callback: async function (chargeToken) {

  //           const resp  = await proceedPayment(chargeToken.id);


  //         },
  //       })
  //     })
  //   },
  // })


  return (
    <div className='flex h-screen w-full justify-center items-center flex-col'>
      <p className='text-white my-2 font-bold '>Latte coffee @ R29.00</p>
      <button id="pay-buttons"  onClick={async () => {
        setIsloading(true);
        const resp  = await proceedPayment('');
        if (resp) {
          // @ts-ignore
          router.push((resp.redirect))
        } else {
          router.push('/')
        }
      }} className="px-3 p-2 text-white rounded-lg bg-slate-500">{isLoading ?'Loading...' : 'Pay now'}</button>
    </div>
  )
}

export default Coffee