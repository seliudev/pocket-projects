const Footer = () => {
    return (
        <footer className="bg-indigo-950 text-white py-6 mt-12">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Seliudev. All rights reserved.
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://github.com/seliudev" className="hover:text-indigo-300">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
