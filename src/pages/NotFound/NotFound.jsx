import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
                <div className="text-center max-w-[600px] mx-auto">
                    {/* Error Code */}
                    <h1 className="text-9xl font-bold text-blue-400 mb-4">404</h1>

                    {/* Title */}
                    <h2 className="text-4xl font-semibold mb-4 text-blue-300">
                        Page Not Found
                    </h2>

                    {/* Description */}
                    <p className="text-lg mb-8 text-gray-300">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>

                    {/* Home Button */}
                    <Link
                        to="/"
                        className="inline-block rounded-md bg-blue-600 hover:bg-blue-700 py-3 px-8 text-base font-semibold text-white transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        Return Home
                    </Link>

                    {/* Optional: Contact Link */}
                    <div className="mt-6">
                        <p className="text-gray-400">
                            Need help?{" "}
                            <Link
                                to="/contact"
                                className="text-blue-400 hover:underline"
                            >
                                Contact us
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NotFound;