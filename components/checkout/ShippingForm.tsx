"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ShippingData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
}

interface ShippingFormProps {
  initialData: ShippingData;
  onSubmit: (data: ShippingData) => void;
  onBack: () => void;
  step: "contact" | "shipping";
}

const initialErrors: Partial<ShippingData> = {};

export function ShippingForm({ initialData, onSubmit, onBack, step }: ShippingFormProps) {
  const [form, setForm] = useState<ShippingData>(initialData);
  const [errors, setErrors] = useState<Partial<ShippingData>>(initialErrors);

  const update = (field: keyof ShippingData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const next: Partial<ShippingData> = {};

    if (step === "contact") {
      if (!form.email.trim()) next.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        next.email = "Please enter a valid email";
      if (!form.firstName.trim()) next.firstName = "First name is required";
      if (!form.lastName.trim()) next.lastName = "Last name is required";
    }

    if (step === "shipping") {
      if (!form.address.trim()) next.address = "Address is required";
      if (!form.city.trim()) next.city = "City is required";
      if (!form.state.trim()) next.state = "State is required";
      if (!form.zip.trim()) next.zip = "ZIP code is required";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) onSubmit(form);
  };

  const Field = ({
    id,
    label,
    type = "text",
    field,
  }: {
    id: string;
    label: string;
    type?: string;
    field: keyof ShippingData;
  }) => (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <Input
        id={id}
        type={type}
        value={form[field]}
        onChange={(e) => update(field, e.target.value)}
        aria-invalid={!!errors[field]}
        aria-describedby={errors[field] ? `${id}-error` : undefined}
      />
      {errors[field] && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {errors[field]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {step === "contact" && (
        <>
          <Field id="email" label="Email" type="email" field="email" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="firstName" label="First Name" field="firstName" />
            <Field id="lastName" label="Last Name" field="lastName" />
          </div>
          <Field id="phone" label="Phone (optional)" type="tel" field="phone" />
        </>
      )}

      {step === "shipping" && (
        <>
          <Field id="address" label="Address" field="address" />
          <div className="grid gap-4 sm:grid-cols-3">
            <Field id="city" label="City" field="city" />
            <Field id="state" label="State" field="state" />
            <Field id="zip" label="ZIP Code" field="zip" />
          </div>
        </>
      )}

      <div className="flex gap-3 pt-2">
        {step !== "contact" && (
          <Button type="button" variant="outline" onClick={onBack} className="flex-1">
            Back
          </Button>
        )}
        <Button type="submit" className="flex-1">
          {step === "shipping" ? "Review Order" : "Continue to Shipping"}
        </Button>
      </div>
    </form>
  );
}
