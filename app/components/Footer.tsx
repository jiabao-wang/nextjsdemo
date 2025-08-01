const Footer = () => {
  return (
    <footer className="bg-white shadow-md fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} 奢饰品服装商城. 保留所有权利。
        </p>
      </div>
    </footer>
  );
};

export default Footer;