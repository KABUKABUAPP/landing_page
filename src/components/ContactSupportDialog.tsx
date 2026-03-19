import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { X } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type ContactSupportDialogProps = {
  trigger: ReactNode;
};

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

const DEFAULT_CONTACT_SUPPORT_API_BASE_URL =
  "https://rideservice-dev.up.railway.app";
const CONTACT_SUPPORT_API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ?? DEFAULT_CONTACT_SUPPORT_API_BASE_URL
).replace(/\/+$/, "");

type ContactSupportApiResponse = {
  message?: string;
};

const ContactSupportDialog = ({ trigger }: ContactSupportDialogProps) => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState(initialFormState);

  const resetDialogState = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setErrorMessage("");
    setFormState(initialFormState);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      resetDialogState();
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      fullname: formState.name.trim(),
      email: formState.email.trim(),
      message: formState.message.trim(),
    };

    if (!payload.fullname || !payload.email || !payload.message) {
      setErrorMessage("Please complete all fields before sending your message.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${CONTACT_SUPPORT_API_BASE_URL}/contact-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let responseBody: ContactSupportApiResponse | null = null;

      try {
        responseBody = (await response.json()) as ContactSupportApiResponse;
      } catch {
        responseBody = null;
      }

      if (!response.ok) {
        setErrorMessage(
          responseBody?.message ??
            "We couldn't send your message right now. Please try again.",
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setErrorMessage(
        "We couldn't send your message right now. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    resetDialogState();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="top-3 w-[calc(100vw-1.5rem)] max-h-[calc(100dvh-1.5rem)] max-w-[720px] translate-y-0 overflow-y-auto overscroll-contain rounded-[2rem] border-none bg-white p-0 shadow-[0_30px_90px_rgba(0,0,0,0.18)] [scrollbar-width:none] [-ms-overflow-style:none] sm:top-4 sm:w-[calc(100vw-2rem)] [&::-webkit-scrollbar]:hidden [&>button]:hidden">
        {submitted ? (
          <div className="p-5 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-[2rem] font-semibold leading-tight text-[#1d1d1d]">
                  Thank you for your feedback
                </h2>
                <p className="mt-2 text-body text-[#9a9a9a]">
                  You will be contacted via email for follow up
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close feedback dialog"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f6f6f6] text-[#1d1d1d] transition-colors hover:bg-[#efefef]"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="mt-20 w-full rounded-xl bg-primary px-6 py-4 text-bodyLg font-medium text-black transition-colors hover:bg-primary/90"
            >
              Okay
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-[2rem] font-semibold leading-tight text-[#1d1d1d]">
                  Tell us what&apos;s on your mind
                </h2>
                <p className="mt-2 text-body text-[#9a9a9a]">
                  Our agents responds within the hour
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close contact form"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f6f6f6] text-[#1d1d1d] transition-colors hover:bg-[#efefef]"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-8 space-y-6">
              <label className="block">
                <span className="text-bodyLg font-medium text-[#1d1d1d]">
                  Your name
                </span>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  value={formState.name}
                  onChange={(event) =>
                    setFormState((currentState) => ({
                      ...currentState,
                      name: event.target.value,
                    }))
                  }
                  placeholder="Name here"
                  className="mt-3 h-14 w-full rounded-2xl border-none bg-[#f6f6f6] px-5 text-body text-[#1d1d1d] placeholder:text-[#a6a6a6] focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-70"
                />
              </label>

              <label className="block">
                <span className="text-bodyLg font-medium text-[#1d1d1d]">
                  Your email address
                </span>
                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  value={formState.email}
                  onChange={(event) =>
                    setFormState((currentState) => ({
                      ...currentState,
                      email: event.target.value,
                    }))
                  }
                  placeholder="Email here"
                  className="mt-3 h-14 w-full rounded-2xl border-none bg-[#f6f6f6] px-5 text-body text-[#1d1d1d] placeholder:text-[#a6a6a6] focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-70"
                />
              </label>

              <label className="block">
                <span className="text-bodyLg font-medium text-[#1d1d1d]">
                  Your message
                </span>
                <textarea
                  required
                  rows={6}
                  disabled={isSubmitting}
                  value={formState.message}
                  onChange={(event) =>
                    setFormState((currentState) => ({
                      ...currentState,
                      message: event.target.value,
                    }))
                  }
                  placeholder="Type here"
                  className="mt-3 w-full resize-none rounded-2xl border-none bg-[#f6f6f6] px-5 py-5 text-body text-[#1d1d1d] placeholder:text-[#a6a6a6] focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-70"
                />
              </label>
            </div>

            {errorMessage ? (
              <p className="mt-5 text-sm font-medium text-[#d24134]">
                {errorMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 w-full rounded-xl bg-primary px-6 py-4 text-bodyLg font-medium text-black transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactSupportDialog;
