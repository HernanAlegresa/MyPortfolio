"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { WaitlistForm } from "./WaitlistForm";

interface WaitlistModalProps {
  productId: string;
  productName: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function WaitlistModal({
  productId,
  productName,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
}: WaitlistModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = useCallback(
    (value: boolean) => {
      if (isControlled && controlledOnOpenChange) {
        controlledOnOpenChange(value);
      } else if (!isControlled) {
        setInternalOpen(value);
      }
    },
    [isControlled, controlledOnOpenChange]
  );

  // Listen for custom event to open modal
  useEffect(() => {
    const handleOpenWaitlist = () => {
      setOpen(true);
    };

    window.addEventListener("open-waitlist-modal", handleOpenWaitlist);
    return () => {
      window.removeEventListener("open-waitlist-modal", handleOpenWaitlist);
    };
  }, [setOpen]);

  const handleSuccess = () => {
    // Close modal after a short delay to show success message
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Get Notified</DialogTitle>
          <DialogDescription>
            Enter your email to be notified when {productName} is back in stock.
          </DialogDescription>
        </DialogHeader>
        <WaitlistForm
          productId={productId}
          productName={productName}
          onSuccess={handleSuccess}
        />
      </DialogContent>
    </Dialog>
  );
}
