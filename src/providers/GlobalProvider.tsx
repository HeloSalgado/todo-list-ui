import { ToastContainer } from "react-toastify";
import { ReactNode } from "react";
import "react-toastify/dist/ReactToastify.css";

interface GlobalProviderProps {
    children: ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={true}
                pauseOnHover={false}
                theme="colored"
            />
            {children}
        </>
    );
};
export default GlobalProvider;