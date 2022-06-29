import React , { useState } from 'react'
import { CardElement , useElements , useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base : {
            iconColor : "#c4f0ff",
            color : "#fff",
            fontWeight: 500, 
            fontFamily: "Roboto,Open Sans, Segoe UI , sans-serif",
            fontSiez: "16px",
            fontSmoothing:"antialised",
            ":-webkit-autofill" :  {color : "#fce883"} , 
            "::placeholder" : {color : "#87bbfd"}
        },
        invalid: {
            iconColor: "#ffc7ee",
            color:"#ffc7ee"
        }
    }
}

export default function FormulairePayment() {
    const [success,setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error , paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if(!error) {
            try{
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:5008/payment" , {
                    amount: 1000,
                    id
                })

                if(response.data.succes) {
                    console.log("Successful payment")
                    setSuccess(true)
                }
            }catch(error){
                console.log("Error" , error)
            }
        }else{
            console.log(error.message)
        }
    }
    return (
        <>
        {!success ?
            <form onSubmit={handleSubmit}>
                <fieldset className="formGroupPayment">
                    <div className="formRow">
                        <CardElement options={CARD_OPTIONS} />
                    </div>
                </fieldset>
                <button>Payez</button>
            </form>
            :
            <div>
                <h2>Vous avez bien payé le prime</h2>
            </div>
        }


        </>
    )
}