import { useState } from "react"
import { Button } from "../src/stories/Button"
import { Page } from "./stories/Page"

function App() {

  const [buttonName, setButtonName] = useState<string>("nothing to chosen")

  return (
    <>
      <div>{`chosen button: ${buttonName}`}</div>
      <Button label="primary" primary={true} onClick={() => setButtonName("primary")} />
      <Button label="large" size="large" onClick={() => setButtonName("large")} />
      <Button label="secondary" onClick={() => setButtonName("secondary")} />
      <Button primary={true} label="Warning" backgroundColor="red" onClick={() => setButtonName("Warning")} />
      <Page />
    </>
  )
}

export default App
