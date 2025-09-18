import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    industry: "",
    message: ""
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setShowThankYou(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Thank You Section Component
  if (showThankYou) {
    return (
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-gray-800 border-gray-700 p-12">
              <CardContent>
                <div className="mb-8">
                  <div className="mx-auto w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-10 w-10 text-green-400" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4 text-green-400">Thank You!</h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Your message has been successfully submitted. Our team will review your inquiry and get back to you within 24 hours.
                  </p>
                </div>

                <div className="bg-blue-600/20 border border-blue-600/30 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-2 text-white">Need Immediate Support?</h3>
                  <p className="text-gray-300 mb-4">
                    For urgent inquiries or immediate assistance, please call our support line:
                  </p>
                  <div className="flex items-center justify-center gap-2 text-blue-400 font-bold text-lg">
                    <Phone className="h-5 w-5" />
                    <span>8814930229</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    onClick={() => setShowThankYou(false)}
                    variant="outline" 
                    className="w-full bg-transparent border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Let's Connect</h2>
          <p className="text-gray-300 text-lg">
            Got A Project That You Would Like To Discuss
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Send us a message</CardTitle>
              <CardDescription className="text-gray-300">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block mb-2 text-white">
                    Full Name *
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-white">
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-white">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block mb-2 text-white">
                    Company *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block mb-2 text-white">
                    Industry
                  </label>
                  <Select onValueChange={(value) => setFormData({...formData, industry: value})}>
                    <SelectTrigger className="w-full bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-white">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  SEND REQUEST
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Get in touch</h3>
              <p className="text-gray-300 mb-8">
                Ready to transform your business? Contact us today to discuss how HiveRift can help you achieve your goals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-gray-300">+91 8814930229, 011 71367194</p>
                  <p className="text-gray-300 text-sm">Service 24*7</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-300">info@hiverift.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-gray-300">New Rohtak Rd, Ratan Nagar, Karol Bagh</p>
                  <p className="text-gray-300">New Delhi, Delhi, 110005</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
              <h4 className="font-semibold mb-2 text-white">Custom Website Design & Development</h4>
              <p className="text-gray-300 text-sm">
                Transforming business challenges into growth opportunities, we leverage our 3T Pillar - Talent, Tailored, Trust - to deliver effective and customized solutions for your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}