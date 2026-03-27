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

  // ✅ Name Validation (ONLY alphabets, no number start, no digits)
  const validateName = (name: string) => {
    return /^[A-Za-z][A-Za-z\s]*$/.test(name);
  };

  // ✅ Email Validation
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // ✅ Word Count Function
  const getWordCount = (text: string) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔴 First Name Validation
    if (!validateName(form.firstName)) {
      return toast({
        title: "Invalid First Name",
        description: "First name should only contain letters and not start with a number.",
      });
    }

    // 🔴 Last Name Validation
    if (!validateName(form.lastName)) {
      return toast({
        title: "Invalid Last Name",
        description: "Last name should only contain letters and not start with a number.",
      });
    }

    // 🔴 Email Validation
    if (!validateEmail(form.email)) {
      return toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      });
    }

    // 🔴 Message Empty Check
    if (!form.message.trim()) {
      return toast({
        title: "Message Required",
        description: "Please enter details about your project.",
      });
    }

    // 🔴 450 Words Limit
    if (getWordCount(form.message) > 450) {
      return toast({
        title: "Message Too Long",
        description: "Maximum 450 words allowed.",
      });
    }

    setIsSubmitting(true);

    // 👉 EMAIL API CALL HERE
    setTimeout(() => {
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

      setIsSubmitting(false);
    }, 1000);
  };

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
              <div className="grid grid-cols-2 gap-4">
                <Input
                  value={form.firstName}
                  placeholder="First Name"
                  required
                  onChange={(e) =>
                    setForm({ ...form, firstName: e.target.value })
                  }
                />
                <Input
                  value={form.lastName}
                  placeholder="Last Name"
                  required
                  onChange={(e) =>
                    setForm({ ...form, lastName: e.target.value })
                  }
                />
              </div>

              <Input
                value={form.email}
                type="email"
                placeholder="Email"
                required
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />

              <Input
                value={form.company}
                placeholder="Company"
                onChange={(e) =>
                  setForm({ ...form, company: e.target.value })
                }
              />

              <Textarea
                value={form.message}
                placeholder="Tell us about your project (max 450 words)"
                required
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />

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