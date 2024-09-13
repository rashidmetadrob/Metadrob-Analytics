const ModalComponent = ({ isVisible, onClose }: { isVisible: any, onClose: any }) => {
    if (!isVisible) return null;
  
    return (
      <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-40">
        <div className="w-full h-full flex justify-center items-center p-4">
          <div className="relative w-full max-w-2xl h-3/4 md:h-auto bg-black rounded-md shadow-md overflow-y-auto">
            <div className="flex justify-between p-4">
                <p className="text-sm font-roboto text-white">Clicks per session</p>
              <svg onClick={() => { onClose() }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-4 flex flex-col space-y-4">
               {/* write content here */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ModalComponent;
  