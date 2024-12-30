export function Footer() {
  return (
    // <div >
      <div className="flex flex-col w-full h-fit bg-[#374151] text-[#e5e7eb] px-16 py-7">
        <div className="flex flex-row">
          <div className="flex flex-col gap-2 justify-center w-[35%]">
            <div className="flex items-center w-full gap-4">
              <div className="text-xl font-bold ">Elie Ruhamya</div>
            </div>
          </div>
          <div className="flex flex-row w-[65%] justify-end gap-16 text-nowrap">
            <div className="flex flex-col gap-2">
              <div className="font-bold uppercase text-[#9ca3af] pb-3">
                Newsletter
              </div>
              <form className="flex items-center">
                <input
                  type="email"
                  name="email"
                  disabled={true}
                  placeholder="Enter your email"
                  className="w-full bg-gray-100 text-gray-700 rounded-l-lg py-3 px-4 focus:outline-none focus:ring-purple-600 focus:border-transparent"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={true}
                  className="bg-[#7e22ce] text-[#ffffff] font-semibold py-3 px-6 rounded-r-lg transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-gray-500 my-8"></div>
        <div className="text-center">
          © 2024 Elie Ruhamya - All rights reserved.
        </div>
      </div>
    // </div>
  );
}
