import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface CheckoutStepsProps {
  currentStep: number;
}

const steps = ["Contact", "Shipping", "Review"];

export function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  return (
    <nav aria-label="Checkout steps" className="mb-8">
      <ol className="flex items-center justify-center gap-2">
        {steps.map((step, index) => {
          const stepNum = index + 1;
          const isComplete = stepNum < currentStep;
          const isCurrent = stepNum === currentStep;

          return (
            <li key={step} className="flex items-center gap-2">
              {index > 0 && (
                <div
                  className={cn(
                    "h-px w-8 sm:w-12",
                    isComplete ? "bg-black" : "bg-gray-200"
                  )}
                />
              )}
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium transition-colors",
                    isComplete && "bg-black text-white",
                    isCurrent && "border-2 border-black text-black",
                    !isComplete && !isCurrent && "border border-gray-300 text-gray-400"
                  )}
                >
                  {isComplete ? <Check className="h-3.5 w-3.5" /> : stepNum}
                </div>
                <span
                  className={cn(
                    "hidden text-sm sm:block",
                    isCurrent ? "font-medium" : "text-gray-500"
                  )}
                >
                  {step}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
