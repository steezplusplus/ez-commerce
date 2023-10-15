export default function CheckoutPage() {
  return (
    <div className="flex min-h-screen flex-col px-4 py-2">
      <h2 className="text-md font-semibold">Checkout</h2>
      <h3 className="mb-6 text-sm font-thin">Information &gt; Shipping &gt; Payment</h3>

      <label className="mb-2" htmlFor="contact">
        Contact
      </label>
      <input className="rounded border" id="contact" name="contact" />

      <h2 className="text-md mb-2 mt-6 font-semibold">Shipping address</h2>
      <label className="mb-2" htmlFor="country">
        Country/Region
      </label>
      <input className="rounded border" id="country" name="country" />

      <div className="mb-2 flex gap-x-2">
        <label>
          First name
          <input className="w-full rounded border" name="first-name" />
        </label>
        <label>
          Last name
          <input className="w-full rounded border" name="last-name" />
        </label>
      </div>

      <label className="mb-2" htmlFor="address">
        Address
      </label>
      <input className="rounded border" id="address" name="address" />

      <label className="mb-2" htmlFor="">
        Apartment, Suite, etc (optional)
      </label>
      <input className="rounded border" id="" name="" />
    </div>
  );
}
