export default function CheckoutPage() {
  return (
    <div className="flex min-h-screen flex-col px-4 py-2">
      <h2 className="text-md font-semibold">Checkout</h2>
      <h3 className="text-sm font-thin mb-6">Information &gt; Shipping &gt; Payment</h3>

      <label className="mb-2" htmlFor="contact">Contact</label>
      <input className="border rounded" id="contact" name="contact" />

      <h2 className="text-md font-semibold mt-6 mb-2">Shipping address</h2>
      <label className="mb-2" htmlFor="country">Country/Region</label>
      <input className="border rounded" id="country" name="country" />

      <div className="flex gap-x-2 mb-2">
        <label>First name
          <input className="border rounded w-full" name="first-name" />
        </label>
        <label>Last name
          <input className="border rounded w-full" name="last-name" />
        </label>
      </div>

      <label className="mb-2" htmlFor="address">Address</label>
      <input className="border rounded" id="address" name="address" />

      <label className="mb-2" htmlFor="">Apartment, Suite, etc (optional)</label>
      <input className="border rounded" id="" name="" />

    </div>
  );
}