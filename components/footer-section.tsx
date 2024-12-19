export function FooterSection() {
    return (
      <footer className="bg-[#0D0D0D] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="text-4xl font-bold">EDGE 11</div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="space-y-4">
                <h3 className="text-sm font-medium mb-4">MENU</h3>
                <nav className="flex flex-col gap-2">
                  <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
                  <a href="#" className="text-gray-400 hover:text-white">TUTORIALS</a>
                </nav>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium mb-4">FOLLOW</h3>
                <nav className="flex flex-col gap-2">
                  <a href="#" className="text-gray-400 hover:text-white">X</a>
                  <a href="#" className="text-gray-400 hover:text-white">LINKEDIN</a>
                  <a href="#" className="text-gray-400 hover:text-white">INSTAGRAM</a>
                  <a href="#" className="text-gray-400 hover:text-white">YOUTUBE</a>
                </nav>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between items-center text-sm text-gray-400">
            <div>© EDGE 11 2024</div>
            <div className="flex gap-4">
              <button className="hover:text-white">Cookie settings</button>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  