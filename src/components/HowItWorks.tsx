
export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-two-trees-green mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Getting your time back is just three simple steps away
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-two-trees-green text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold text-two-trees-green mb-4">Book Online</h3>
            <p className="text-gray-600">
              Choose your cleaning package and schedule a time that works for your busy life.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-two-trees-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold text-two-trees-green mb-4">We Clean</h3>
            <p className="text-gray-600">
              Our reliable team arrives on time and cleans your home to our high standards.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-two-trees-green text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold text-two-trees-green mb-4">Enjoy Your Time</h3>
            <p className="text-gray-600">
              Come home to a spotless house and spend your weekend doing what you love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
