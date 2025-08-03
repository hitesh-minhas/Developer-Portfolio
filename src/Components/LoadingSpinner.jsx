import { FaSpinner } from 'react-icons/fa';
const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50">
            <div className="text-center">
                <FaSpinner className="animate-spin text-blue-400 text-5xl mb-4 mx-auto" />
                <p className="text-blue-300 text-xl">Loading content...</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;