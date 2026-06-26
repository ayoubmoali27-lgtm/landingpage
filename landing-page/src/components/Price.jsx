import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "@/constants";
import Button from "@mui/material/Button";

const Price = () => {
  return (
    <div className="mt-20 scroll-mt-24" id="Pricing">
      <h2 className=" text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mn-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most pupolar)
                  </span>
                )}
              </p>

                <p className="mb-8 mt-2">
                    <span className="text-5xl mt-6 mr-2">{option.price}</span>
                    <span className="text-neutral-400 tracking-tight">/Month</span>
                </p>
              
                <ul>
                  {option.features.map((feature, index) => (
                    <li key={index} className="mt-8 flex items-center">
                      <CheckCircle2 />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt:2,
                    background:
                      "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
                    color: "#fff",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #c02d5e 0%, #c89a47 100%)",
                    },
                  }}
                >
                  Subscribe
                </Button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
