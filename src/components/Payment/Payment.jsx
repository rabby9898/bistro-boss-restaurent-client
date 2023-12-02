import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY_PK);
  return (
    <div className="pl-20 w-[750px]">
      <SectionTitle title="Payment" subTitle="Please pay to eat"></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
