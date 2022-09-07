import { useState } from "react";

function useToggler(defaultVal) {
    const [on, setOn] = useState(defaultVal)

    const toggle = () => {
        setOn(prevState => !prevState)
    }

    return [on, toggle]
}

export default useToggler