

export default ()=>{
    return<>
    <footer
  className="ftco-footer relative bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/bg_4.jpg')" }}
>
<div class="overlay"></div>
  <div className="absolute inset-0  opacity-50"></div>
  <div className="container relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      {/* Column 1 */}
      <div>
        <h2 className="text-white text-lg font-bold mb-4">Harbor Lights</h2>
        <p className="text-gray-300 text-sm">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <ul className="flex space-x-3 mt-5">
          <li className="bg-blue-500 rounded-full justify-center items-center flex w-10 h-10">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <span className="text-[20px] icon-twitter"></span>
            </a>
          </li>
          <li className="bg-blue-500 rounded-full justify-center items-center flex w-10 h-10">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <span className="text-[20px] icon-facebook"></span>
            </a>
          </li>
          <li className="bg-blue-500 rounded-full justify-center items-center flex w-10 h-10">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <span className="text-[20px] icon-instagram"></span>
            </a>
          </li>
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <h2 className="text-white text-lg font-bold mb-4">Useful Links</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Rooms
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Amenities
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Gift Card
            </a>
          </li>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h2 className="text-white text-lg font-bold mb-4">Privacy</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Career
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Services
            </a>
          </li>
        </ul>
      </div>

      {/* Column 4 */}
      <div>
        <h2 className="text-white text-lg font-bold mb-4">Have Questions?</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="icon-map-marker mr-2 text-blue-400"></span>
            <span className="text-gray-300 text-sm">
              203 Fake St. Mountain View, San Francisco, California, USA
            </span>
          </li>
          <li className="flex items-center">
            <span className="icon-phone mr-2 text-blue-400"></span>
            <a
              href="tel:+23923929210"
              className="text-gray-300 hover:text-white transition duration-300 text-sm"
            >
              +2 392 3929 210
            </a>
          </li>
          <li className="flex items-center">
            <span className="icon-envelope mr-2 text-blue-400"></span>
            <a
              href="mailto:info@yourdomain.com"
              className="text-gray-300 hover:text-white transition duration-300 text-sm"
            >
              info@yourdomain.com
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center text-gray-300">
      <p>
        Copyright &copy;{new Date().getFullYear()} All rights reserved | This
        template is made with{" "}
        <i className="icon-heart text-red-500" aria-hidden="true"></i> by{" "}
        <a
          href="https://colorlib.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:text-blue-500 transition duration-300"
        >
          Colorlib
        </a>
      </p>
    </div>
  </div>
</footer>

    
    
    </>
}