const EcoDecorIdeas = () => {
  return (
    <section className="bg-green-50 py-14 px-4 md:px-8 ">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="sm:text-3xl text-2xl font-bold text-green-700">
          Eco Decor Ideas
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Transform your living space into a calm, eco-friendly haven with these
          plant-based decor ideas and styling tips.
        </p>
      </div>

      <div className="space-y-3 max-w-4xl mx-auto">
        <div className="collapse collapse-arrow bg-white border border-green-100 shadow-sm">
          <input type="radio" name="eco-accordion" defaultChecked />
          <div className="collapse-title font-semibold text-green-700">
            How can I decorate small spaces with plants?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Use wall-mounted planters or hanging pots to add greenery without
            taking up floor space. Succulents or trailing plants work best.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-white border border-green-100 shadow-sm">
          <input type="radio" name="eco-accordion" />
          <div className="collapse-title font-semibold text-green-700">
            What are some easy eco-decor ideas for the living room?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Combine leafy plants like Monstera or Peace Lily with bamboo or
            rattan furniture for a natural, earthy vibe.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-white border border-green-100 shadow-sm">
          <input type="radio" name="eco-accordion" />
          <div className="collapse-title font-semibold text-green-700">
            How do I style plants near windows?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Place sun-loving plants like Snake Plant or Aloe Vera on window
            sills, and layer with hanging pots for a fresh, airy look.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-white border border-green-100 shadow-sm">
          <input type="radio" name="eco-accordion" />
          <div className="collapse-title font-semibold text-green-700">
            What plants are best for a minimalist setup?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Go for single tall plants like Fiddle Leaf Fig or Rubber Plant to
            make a bold statement with minimal clutter.
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoDecorIdeas;
