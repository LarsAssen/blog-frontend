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
    <div className="text-center bg-gray-50">
      <h2>Subscribe to my newsletter!</h2>
      <p>
        Stay up to date on all the latest posts and content by subscribing to the newsletter.
      </p>
      <div>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded mr-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-main-color text-white font-bold py-2 px-4 rounded"
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          {state === "LOADING" ? "Loading" : "Subscribe"}
        </button>
      </div>
      {state === "ERROR" && <p>{errorMessage}</p>}
      {state === "SUCCESS" && <p>Success!</p>}
    </div>
  )
}

export default SubscribeBox;