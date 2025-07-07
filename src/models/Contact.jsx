import Button from "../layouts/Button";

export function Contact({ closeForm }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="popup-form mt-12">
        <form className="w-80 md:w-96 bg-white rounded-2xl shadow-2xl p-6 space-y-4">
          <h1 className="text-2xl font-bold text-center text-gray-800">Book Now</h1>

          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone No"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="flex justify-between items-center pt-4">
            <Button title="Book" />
            <button
              onClick={closeForm}
              type="button"
              className="px-4 py-2 text-sm text-gray-600 hover:text-white bg-gray-200 hover:bg-red-500 rounded-md transition-all"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
