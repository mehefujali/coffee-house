import { createContext, useState } from "react";


export const signalContext = createContext()



const SignalProvider = ({ children }) => {
      const [signal, setSignal] = useState('signal')


      const signals = {
            signal,
            setSignal
      }

      return (
            <signalContext.Provider value={signals}>
                  {
                        children
                  }
            </signalContext.Provider>
      );
};

export default SignalProvider;