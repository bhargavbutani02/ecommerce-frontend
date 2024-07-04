export default function Discount() {
  return (
    <div className="bg-[rgb(255,247,236)] py-12 ">
      <div className="md:flex justify-between container  items-center">
        <div className="mx-20 w-[320px]">
          <p className="text-xl font-semibold">
            Grab an extra 5% <br /> discount
          </p>
          <p className="text-[10px] text-gray-500">
            Subscribe to monthly newsletter. Get the latest product updates and
            special offers delivered right to your inbox.
          </p>
        </div>
        <div className="mx-20 py-5">
          {/* In your component */}
          <input
            className="z-10 relative  pr-[200px] border border-gray-700 py-1 pl-3 bg-transparent rounded-lg"
            placeholder="Enter Email Address"
          />
        </div>
      </div>
    </div>
  );
}
