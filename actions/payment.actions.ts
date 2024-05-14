'use server'

import { error } from "console";
import { redirect } from "next/navigation";


export async function proceedPayment(token: string) {

    try {
    
        const response = await fetch('https://payments.yoco.com/api/checkouts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sk_test_13d0f388EB66k7lef40415cbdb84',
          },
          body: JSON.stringify({
            amount: 2900,
            currency: 'ZA',
            successUrl: 'http://localhost:3000/',  
            cancelUrl: 'http://localhost:3000/coffee', 
            failureUrl: 'http://localhost:3000/coffee',
            // Add other necessary parameters here according to your requirements
          }),
        });
  
        if (!response.ok) {
          throw new Error(`Failed to create Checkout: ${response.statusText}`);
        }
  
        const responseData = await response.json();

        console.log(responseData)

        return {
            id: responseData.id,
            redirect: responseData.redirectUrl,
        }
  
      } catch (error) {
        console.error('Error creating Checkout:', error);
        return undefined

        
      }

    // try {
    //     const resp = await fetch(
    //         'https://online.yoco.com/v1/charges/',
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': 'Bearer sk_test_13d0f388EB66k7lef40415cbdb84',
    //             },
    //             body: JSON.stringify({
    //                 token: token, 
    //                 amount: 2799,
    //                 currency: "ZAR",})
    //         }
    //     );
    //     if (resp !== null) {
    //         const data = await resp.json();
    //         console.log(data)
    //     }else {
    //         console.log('Mawa trop')
    //     }

    // } catch(err) {
    //     console.log(err)
    //     redirect('/')
       
    // }
    
    
}