import { useState } from "react"
import axios from "axios"

const SubscribeBox = () => {
  const [email, setEmail] = useState("")
  const [state, setState] = useState("IDLE")
  const [errorMessage, setErrorMessage] = useState(null)

  const subscribe = async () => {
    setState("LOADING")
    setErrorMessage(null)
    try {
      const response = await axios.post("/api/newsletter", { email })
      setState("SUCCESS")
    } catch (e:any) {
      setErrorMessage(e.response.data.error)
      setState("ERROR")
    }
  }

  return (
    <div>
      <div>
        <input
          className="bg-gray-200 appearance-none border-2 font-mainFont border-gray-200 rounded mr-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary-color"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
          className="bg-secondary-color mt-4 text-white font-bold py-2 px-4 rounded"
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          {state === "LOADING" ? "Loading" : "Subscribe"}
        </button>
      {state === "ERROR" && <p>{errorMessage}</p>}
      {state === "SUCCESS" && <p>Success!</p>}
    </div>
  )
}

export default SubscribeBox;