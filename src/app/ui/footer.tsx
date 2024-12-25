export function Footer() {
  return (
    // <div >
      <div className="flex flex-col w-full h-fit bg-[#374151] text-[#e5e7eb] px-16 py-7">
        <div className="flex flex-row">
          <div className="flex flex-col gap-2 justify-center w-[35%] w-[35%]">
            <div className="flex items-center w-full gap-4">
              <div className="text-xl font-bold ">Elie Ruhamya</div>
            </div>
          </div>
          <div className="flex flex-row w-[65%] justify-end gap-16 text-nowrap">
            <div className="grid grid-cols-1 gap-1">
              <div className="flex flex-col gap-2">
                <div className="font-bold uppercase text-[#9ca3af] pb-3">
                  Legal
                </div>{" "}
                <a href="#xxx" className="hover:underline">
                  Imprint
                </a>{" "}
                <a href="#xxx" className="hover:underline">
                  Privacy Policy
                </a>{" "}
                <a href="#xxx" className="hover:underline">
                  Terms of Use
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold uppercase text-[#9ca3af] pb-3">
                Newsletter
              </div>
              <p className="text-[#e5e7eb] mb-2">
                Subscribe to our newsletter.
              </p>
              <form className="flex items-center">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-100 text-gray-700 rounded-l-lg py-3 px-4 focus:outline-none focus:ring-purple-600 focus:border-transparent"
                  autocomplete="off"
                  required=""
                />
                <button
                  type="submit"
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
