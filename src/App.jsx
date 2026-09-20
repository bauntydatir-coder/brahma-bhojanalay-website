function App() {
  return (
    <div className="min-h-screen bg-orange-50">

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-orange-700">
            Brahma Bhojanalay
          </h1>

          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a href="#home" className="hover:text-orange-600">
              Home
            </a>

            <a href="#about" className="hover:text-orange-600">
              About
            </a>

            <a href="#menu" className="hover:text-orange-600">
              Menu
            </a>

            <a href="#location" className="hover:text-orange-600">
              Location
            </a>

            <a href="#contact" className="hover:text-orange-600">
              Contact
            </a>
          </div>

        </div>
      </nav>


      {/* Hero Section */}
      <section
        id="home"
        className="min-h-[90vh] flex items-center bg-gradient-to-r from-orange-50 to-amber-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>

            <p className="text-orange-600 font-semibold text-lg mb-3">
              Welcome to Brahma Bhojanalay
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Authentic Indian
              <span className="text-orange-600"> Vegetarian Food</span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg">
              Delicious, fresh and affordable vegetarian meals
              prepared with authentic Indian taste.
            </p>


            {/* Thali Prices */}
            <div className="flex gap-4 mt-6 flex-wrap">

              <div className="bg-white rounded-xl shadow-md px-5 py-3">
                <p className="text-gray-500 text-sm">
                  Special Veg Thali
                </p>

                <p className="text-2xl font-bold text-orange-600">
                  ₹90
                </p>
              </div>


              <div className="bg-white rounded-xl shadow-md px-5 py-3">
                <p className="text-gray-500 text-sm">
                  Mini Veg Thali
                </p>

                <p className="text-2xl font-bold text-orange-600">
                  ₹60
                </p>
              </div>

            </div>


            {/* Buttons */}
            <div className="flex gap-4 mt-8 flex-wrap">

              <a
                href="#menu"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
              >
                View Menu
              </a>

              <a
               href="https://www.google.com/maps/search/?api=1&query=Brahma+Bhojanalay+Gaurav+Food+Court+Hinjewadi+Pune" 
                className="border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition"
              >
                Get Directions
              </a>

            </div>

          </div>


          {/* Right Image */}
          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
              alt="Indian vegetarian thali"
              className="w-full max-w-lg h-[420px] object-cover rounded-3xl shadow-2xl"
            />

          </div>

        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-orange-600 font-semibold mb-2">
            About Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Taste of Authentic Indian Food
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Brahma Bhojanalay is a vegetarian food destination located at
            Gaurav Food Court, Hinjewadi, Pune. We serve fresh, tasty and
            affordable Indian meals prepared with care and authentic flavours.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-10">

            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-orange-50 shadow-sm">

              <div className="text-4xl mb-3">
                🍛
              </div>

              <h3 className="font-bold text-xl mb-2">
                Authentic Taste
              </h3>

              <p className="text-gray-600">
                Traditional Indian flavours in every meal.
              </p>

            </div>


            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-orange-50 shadow-sm">

              <div className="text-4xl mb-3">
                🥗
              </div>

              <h3 className="font-bold text-xl mb-2">
                Pure Vegetarian
              </h3>

              <p className="text-gray-600">
                Delicious vegetarian food for everyone.
              </p>

            </div>


            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-orange-50 shadow-sm">

              <div className="text-4xl mb-3">
                💰
              </div>

              <h3 className="font-bold text-xl mb-2">
                Affordable Prices
              </h3>

              <p className="text-gray-600">
                Quality food at pocket-friendly prices.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* Thali Section */}
      <section id="thali" className="py-20 bg-orange-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-orange-600 font-semibold mb-2">
              Our Special
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Delicious Veg Thali
            </h2>

            <p className="text-gray-600 mt-3">
              Fresh, tasty and affordable Indian meals.
            </p>

          </div>


          {/* Thali Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">


            {/* Special Thali */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
                alt="Special Veg Thali"
                className="w-full h-64 object-cover"
              />

              <div className="p-7">

                <div className="flex justify-between items-center">

                  <h3 className="text-2xl font-bold text-gray-900">
                    Special Veg Thali
                  </h3>

                  <span className="text-2xl font-bold text-orange-600">
                    ₹90
                  </span>

                </div>


                <p className="text-gray-600 mt-4">
                  A complete vegetarian meal with delicious Indian
                  vegetables, dal, rice and traditional flavours.
                </p>


                <button className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
                  Order / Enquire
                </button>

              </div>

            </div>


            {/* Mini Thali */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Mini Veg Thali"
                className="w-full h-64 object-cover"
              />

              <div className="p-7">

                <div className="flex justify-between items-center">

                  <h3 className="text-2xl font-bold text-gray-900">
                    Mini Veg Thali
                  </h3>

                  <span className="text-2xl font-bold text-orange-600">
                    ₹60
                  </span>

                </div>


                <p className="text-gray-600 mt-4">
                  A light and tasty vegetarian meal, perfect for
                  a quick and affordable lunch.
                </p>


                <button className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
                  Order / Enquire
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* Vegetarian Menu Section */}
<section id="menu" className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-orange-600 font-semibold mb-2">
              Vegetarian Menu
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Delicious Dishes
            </h2>

            <p className="text-gray-600 mt-3">
              Fresh vegetarian dishes prepared with authentic Indian flavours.
            </p>

          </div>


          {/* Menu Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">


            {/* Aloo Bhaji */}
            <div className="p-6 bg-orange-50 rounded-2xl shadow-sm hover:shadow-lg transition">

              <h3 className="text-xl font-bold text-gray-900">
                Aloo Bhaji
              </h3>

              <p className="text-gray-600 mt-2">
                Traditional potato vegetable prepared with Indian spices.
              </p>

            </div>


            {/* Mix Veg Bhaji */}
            <div className="p-6 bg-orange-50 rounded-2xl shadow-sm hover:shadow-lg transition">

              <h3 className="text-xl font-bold text-gray-900">
                Mix Veg Bhaji
              </h3>

              <p className="text-gray-600 mt-2">
                Fresh mixed vegetables cooked with aromatic spices.
              </p>

            </div>


            {/* Sev Bhaji */}
            <div className="p-6 bg-orange-50 rounded-2xl shadow-sm hover:shadow-lg transition">

              <h3 className="text-xl font-bold text-gray-900">
                Sev Bhaji
              </h3>

              <p className="text-gray-600 mt-2">
                Spicy Indian curry topped with crunchy sev.
              </p>

            </div>


            {/* Paneer Bhaji */}
            <div className="p-6 bg-orange-50 rounded-2xl shadow-sm hover:shadow-lg transition">

              <h3 className="text-xl font-bold text-gray-900">
                Paneer Bhaji
              </h3>

              <p className="text-gray-600 mt-2">
                Soft paneer cooked in a rich and flavorful gravy.
              </p>

            </div>


            {/* Baingan Bhaji */}
            <div className="p-6 bg-orange-50 rounded-2xl shadow-sm hover:shadow-lg transition">

              <h3 className="text-xl font-bold text-gray-900">
                Baingan Bhaji
              </h3>

              <p className="text-gray-600 mt-2">
                Delicious brinjal vegetable with traditional spices.
              </p>

            </div>


            {/* Bhindi Masala */}
            <div className="p-6 bg-orange-50 rounded-2xl shadow-sm hover:shadow-lg transition">

              <h3 className="text-xl font-bold text-gray-900">
                Bhindi Masala
              </h3>

              <p className="text-gray-600 mt-2">
                Fresh okra cooked with onions and Indian spices.
              </p>

            </div>


            {/* Matki Usal */}
            <div className="p-6 bg-orange-50 rounded-2xl shadow-sm hover:shadow-lg transition">

              <h3 className="text-xl font-bold text-gray-900">
                Matki Usal
              </h3>

              <p className="text-gray-600 mt-2">
                Healthy sprouted matki cooked in a spicy curry.
              </p>

            </div>


            {/* Chole */}
            <div className="p-6 bg-orange-50 rounded-2xl shadow-sm hover:shadow-lg transition">

              <h3 className="text-xl font-bold text-gray-900">
                Chole
              </h3>

              <p className="text-gray-600 mt-2">
                Delicious chickpeas cooked in traditional Indian gravy.
              </p>

            </div>


            {/* Dal Tadka */}
            <div className="p-6 bg-orange-50 rounded-2xl shadow-sm hover:shadow-lg transition">

              <h3 className="text-xl font-bold text-gray-900">
                Dal Tadka
              </h3>

              <p className="text-gray-600 mt-2">
                Comforting dal finished with a flavorful tadka.
              </p>

            </div>


            {/* Dal Fry */}
            <div className="p-6 bg-orange-50 rounded-2xl shadow-sm hover:shadow-lg transition">

              <h3 className="text-xl font-bold text-gray-900">
                Dal Fry
              </h3>

              <p className="text-gray-600 mt-2">
                Classic Indian dal prepared with aromatic spices.
              </p>

            </div>


            {/* Jeera Rice */}
            <div className="p-6 bg-orange-50 rounded-2xl shadow-sm hover:shadow-lg transition">

              <h3 className="text-xl font-bold text-gray-900">
                Jeera Rice
              </h3>

              <p className="text-gray-600 mt-2">
                Fragrant basmati rice cooked with cumin seeds.
              </p>

            </div>


            {/* Veg Pulao */}
            <div className="p-6 bg-orange-50 rounded-2xl shadow-sm hover:shadow-lg transition">

              <h3 className="text-xl font-bold text-gray-900">
                Veg Pulao
              </h3>

              <p className="text-gray-600 mt-2">
                Aromatic rice cooked with fresh vegetables and spices.
              </p>

            </div>

          </div>

        </div>
      </section>{/* Vegetarian Menu Section */}
            {/* Why Brahma Bhojanalay Section */}
      <section className="py-20 bg-orange-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-orange-600 font-semibold mb-2">
              Why Choose Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Brahma Bhojanalay?
            </h2>

            <p className="text-gray-600 mt-3">
              Good food, authentic taste and affordable prices.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">


            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-lg transition">

              <div className="text-4xl mb-4">
                🍛
              </div>

              <h3 className="font-bold text-lg text-gray-900">
                Authentic Indian Taste
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Traditional Indian flavours in every meal.
              </p>

            </div>


            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-lg transition">

              <div className="text-4xl mb-4">
                🥗
              </div>

              <h3 className="font-bold text-lg text-gray-900">
                Pure Vegetarian Food
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Fresh and delicious vegetarian meals.
              </p>

            </div>


            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-lg transition">

              <div className="text-4xl mb-4">
                💰
              </div>

              <h3 className="font-bold text-lg text-gray-900">
                Affordable Prices
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Tasty food at pocket-friendly prices.
              </p>

            </div>


            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-lg transition">

              <div className="text-4xl mb-4">
                👨‍🍳
              </div>

              <h3 className="font-bold text-lg text-gray-900">
                Freshly Prepared
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Meals prepared fresh for our customers.
              </p>

            </div>


            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-lg transition">

              <div className="text-4xl mb-4">
                📍
              </div>

              <h3 className="font-bold text-lg text-gray-900">
                Convenient Location
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Easily accessible at Hinjewadi, Pune.
              </p>

            </div>

          </div>

        </div>
         </section>

      


      {/* Location - Temporary */}
      <section id="location" className="py-20 bg-orange-50">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-orange-600 font-semibold mb-2">
            Visit Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Location
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Brahma Bhojanalay
          </p>

          <p className="text-gray-600">
            Gaurav Food Court, Hinjewadi, Pune
          </p>

          <button className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
            Get Directions
          </button>

        </div>

      </section>


      {/* Contact - Temporary */}
      <section id="contact" className="py-20 bg-white">

        <div className="max-w-3xl mx-auto px-6 text-center">

          <p className="text-orange-600 font-semibold mb-2">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch
          </h2>

          <form className="mt-8 space-y-4 text-left">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
            ></textarea>

            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              Submit
            </button>

          </form>

        </div>

      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-xl font-bold">
            Brahma Bhojanalay
          </h3>

          <p className="text-gray-400 mt-2">
            Authentic Indian Vegetarian Food
          </p>

          <p className="text-gray-500 mt-4 text-sm">
            Gaurav Food Court, Hinjewadi, Pune
          </p>

        </div>

      </footer>

    </div>
  )
}

export default App