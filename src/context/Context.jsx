import { createContext ,useState} from "react";
import askGPT from "../config/openai";

export const Context = createContext();

const ContextProvider = (props) => {
    // const [input,setInput] = useState("");
    // const [recentPrompt,setRecentPrompt] = useState("");
    // const [prevPrompts,setPrevPrompts] = useState([]);
    // const [showResults,setShowResults] = useState(false);
    // const [loading,setLoading] = useState(false);
    // const [resultData,setResultData] = useState("");

    const onSent = async (prompt) =>{
        await runChat(prompt)
    }  
    
    return (
        <Context.Provider value ={contextValue}>
            {props.childern}
        </Context.Provider>
    )  

}
export default ContextProvider; 