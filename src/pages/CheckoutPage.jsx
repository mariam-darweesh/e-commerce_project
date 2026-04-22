import React from "react";
import { useForm, useFieldArray } from 'react-hook-form'
import PageContainer from "../components/layout/PageContainer";
import Layout from "../components/layout/Layout";


export default function CheckoutPage() {
    const { 
      register,
      control,
      handleSubmit,
      watch,
      formState: { errors }
      } = useForm({
        defaultValues: {
        firstName: '',
        lastName: '',
        email:'',
        phone: '',
        countery: 'Germany',
        city:'',
        address:'',
        paymentMethod: 'card',
        saveInfo: false,
        notes: [{value: ''}],
    },
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'notes'
  });

  const paymentMethod = watch('paymentMethod');

  const onSubmit = (data) => {
    console.log('Checkout Data', data);
  }
  return (
    <Layout>
      <PageContainer>

      <main className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="mb-6 text-3xl font-bold">Checkout</h1>

        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 rounded-2xl bg-white p-6 shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
              {...register("firstName", {required: 'First name is required'})}
                type="text"
                className="w-full border rounded-lg p-3"
                placeholder="First name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>      

            <div>
              <input
              {...register("lastName", {required: 'Last name is required'})}
                type="text"
                className="w-full rounded-lg border p-3"
                placeholder="Last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
         </div>

          <div>
            <input
              {...register('email',
                {
                  required: 'Email is required',
                  pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                  },
                })}
                type="email"
                className="w-full rounded-xl border p-3"
                placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
        <input
          {...register("phone", {
            required: "Phone number is required",
          })}
          placeholder="Phone number"
          className="w-full border rounded-lg p-3"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("address", { required: "Address is required" })}
          placeholder="Street address"
          className="w-full border rounded-lg p-3"
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          {...register("city", { required: "City is required" })}
          placeholder="City"
          className="w-full border rounded-lg p-3"
        />

        <select
          {...register("country", { required: true })}
          className="w-full border rounded-lg p-3"
        >
          <option value="Germany">Germany</option>
          <option value="UK">UK</option>
          <option value="USA">USA</option>
          <option value="Egypt">Egypt</option>
          <option value="UAE">UAE</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
        </select>
      </div>

      <div>
        <p className="font-medium mb-2">Payment Method</p>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" value="card" {...register("paymentMethod")} />
            Card
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" value="cash" {...register("paymentMethod")} />
            Cash on Delivery
          </label>
        </div>
      </div>

      {paymentMethod === "card" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            {...register("cardNumber", {
              required: "Card number is required",
            })}
            placeholder="Card number"
            className="w-full border rounded-lg p-3"
          />
          <input
            {...register("expiry", {
              required: "Expiry date is required",
            })}
            placeholder="MM/YY"
            className="w-full border rounded-lg p-3"
          />
          <input
            {...register("cvv", {
              required: "CVV is required",
            })}
            placeholder="CVV"
            className="w-full border rounded-lg p-3"
          />
        </div>
      )}

      <div>
        <p className="font-medium mb-2">Order Notes</p>

        <div className="space-y-2">
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2">
              <input
                {...register(`notes.${index}.value`)}
                placeholder={`Note ${index + 1}`}
                className="w-full border rounded-lg p-3"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="px-4 py-2 rounded-lg bg-red-500 text-white"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => append({ value: "" })}
          className="mt-3 px-4 py-2 rounded-lg bg-black text-white"
        >
          Add Note
        </button>
      </div>

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("saveInfo")} />
        Save my info for next time
      </label>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
      >
        Place Order
      </button>
        </form>
      </main>
     </PageContainer>
    </Layout>
  );
}