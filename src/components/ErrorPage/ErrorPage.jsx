import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setError } from "../../redux/taskSlice";
import Button from "../Button/Button";
import { TbError404 } from "react-icons/tb";

function ErrorPage() {
  const errorMessage = useSelector((state) => state.tasks.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoHome = () => {
    dispatch(setError(null)); // Clear error before navigating
    navigate("/"); // Navigate to home
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <TbError404 className="text-red-500 w-32 h-32 mb-4 animate-pulse" /> {/* Enlarged & Animated */}
      
      <h1 className="text-3xl font-bold text-red-400 shadow-md">
        Oops! Something went wrong.
      </h1>
      
      <p className="text-gray-300 mt-2 mb-4 text-lg px-6 text-center">
        {errorMessage || "An unexpected error occurred."}
      </p>
      
      <Button
        onClick={handleGoHome}
        className=" bg-blue-500 hover:bg-blue-600 hover:border-blue-500 text-white "
      >
        Go Back Home
      </Button>
    </div>
  );
}

export default ErrorPage;
