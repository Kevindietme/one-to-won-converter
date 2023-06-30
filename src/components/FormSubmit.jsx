import { calculateNewValue } from "@testing-library/user-event/dist/utils"
import { useState } from "react"
export default function FormSubmit() {
    

        const [usd, setUsd] = useState('')
        const [won, setWon] = useState('')


    const handleForm = (e) => {
        e.preventDefault() //stops the form from refreshing the page
        
        const usd = e.target.usd.value 
        const won = usd * 1317.98

setWon(won)

        //to clear values in form
        //e.target.usd.value = ''
        //e.target.won.value = ''
    }
    
    return(
<>
<h2>Get Currency Conversion on Submit</h2>
<p>Enter USD to convert to a new currency or use the drop down to select another currency.</p>
<form onSubmit={handleForm}>
    
        <label htmlFor="usd">USD:
            <input type="text" name="usd" />
            <button type="submit">Convert</button>
        </label>
        <label htmlFor="won">WON:
            <input type="text" name="won"
            value={won}
            onChange={e => setWon(e.target.value)}
            />
        </label>
    
</form>
</>

    )
}