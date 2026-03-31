import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Send } from "lucide-react";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const MAX_WORDS = 450;

  const validateName = (name: string) =>
    /^[A-Za-z][A-Za-z\s]*$/.test(name.trim());

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const getWordCount = (text: string) =>
    text.trim() === "" ? 0 : text.trim().split(/\s+/).filter(Boolean).length;

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const wordCount = getWordCount(value);

    if (wordCount > MAX_WORDS) {
      // Trim to 450 words
      const trimmed = value.trim().split(/\s+/).slice(0, MAX_WORDS).join(" ");
      setForm({ ...form, message: trimmed });
      setErrors((prev) => ({
        ...prev,
        message: `Maximum ${MAX_WORDS} words reached.`,
      }));
    } else {
      setForm({ ...form, message: value });
      setErrors((prev) => ({ ...prev, message: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = { firstName: "", lastName: "", email: "", message: "" };
    let hasError = false;

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required.";
      hasError = true;
    } else if (!validateName(form.firstName)) {
      newErrors.firstName =
        "First name must start with a letter and contain only letters.";
      hasError = true;
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
      hasError = true;
    } else if (!validateName(form.lastName)) {
      newErrors.lastName =
        "Last name must start with a letter and contain only letters.";
      hasError = true;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
      hasError = true;
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email address.";
      hasError = true;
    }

    if (!form.message.trim()) {
      newErrors.message = "Please tell us about your project.";
      hasError = true;
    } else if (getWordCount(form.message) > MAX_WORDS) {
      newErrors.message = `Message must be ${MAX_WORDS} words or fewer.`;
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you soon.",
        });
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
        });
        setErrors({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        throw new Error(data.error);
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    }

    setIsSubmitting(false);
  };

  const wordCount = getWordCount(form.message);
  const isNearLimit = wordCount >= MAX_WORDS - 20;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff0dc] to-[#ebdbc4]">

      {/* HERO */}
      <section className="bg-[#5E503F] py-20 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Let's Strengthen Your Practice Together
        </h1>
        <p className="text-white/80">
          Request your no-obligation revenue audit below.
        </p>
      </section>

      {/* MAIN */}
      <section className="py-20">
        <div className="container-wide grid lg:grid-cols-2 gap-16">

          {/* LEFT */}
         <div>
            <h2 className="text-3xl font-bold mb-6">We're Here to Help</h2>

            <p className="text-[#807e78] mb-10">
              Whether you have questions or want to explore collaboration,
              we’d love to hear from you.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-[#D4AF37]" />
                <a
                  href="mailto:contact@sunnyridgesolutions.com"
                  className="text-black text-lg font-semibold"
                >
                  contact@sunnyridgesolutions.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-[#D4AF37]" />
                <a
                  href="tel:+12033689932"
                  className="text-black text-lg font-semibold"
                >
                  (203) 368-9932
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* First + Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <Input
                    value={form.firstName}
                    placeholder="First Name"
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-xs text-red-500">{errors.firstName}</p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <Input
                    value={form.lastName}
                    placeholder="Last Name"
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-xs text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <Input
                  value={form.email}
                  type="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Company (no validation needed) */}
              <Input
                value={form.company}
                placeholder="Company"
                onChange={(e) =>
                  setForm({ ...form, company: e.target.value })
                }
              />

              {/* Message with word counter */}
              <div className="flex flex-col gap-1">
                <Textarea
                  value={form.message}
                  placeholder="Tell us about your project (max 450 words)"
                  rows={5}
                  onChange={handleMessageChange}
                  className={errors.message ? "border-red-500" : ""}
                />
                <div className="flex justify-between items-center">
                  {errors.message ? (
                    <p className="text-xs text-red-500">{errors.message}</p>
                  ) : (
                    <span />
                  )}
                  <p
                    className={`text-xs ml-auto ${
                      wordCount >= MAX_WORDS
                        ? "text-red-500 font-medium"
                        : isNearLimit
                        ? "text-amber-500"
                        : "text-gray-400"
                    }`}
                  >
                    {wordCount} / {MAX_WORDS} words
                  </p>
                </div>
              </div>

              <Button className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>

            </form>
          </div>

        </div>
      </section>
    </div>
  );
}