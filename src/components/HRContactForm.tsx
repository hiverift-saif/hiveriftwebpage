import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { X, Upload, CheckCircle, Mail, Phone, Clock } from "lucide-react";
import { useState } from "react";

interface HRContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  formType: "contact" | "resume";
}

export function HRContactForm({ isOpen, onClose, formType }: HRContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentRole: "",
    experience: "",
    department: "",
    position: "",
    message: "",
    resumeFile: null as File | null
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowThankYou(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        resumeFile: file
      });
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      currentRole: "",
      experience: "",
      department: "",
      position: "",
      message: "",
      resumeFile: null
    });
    setShowThankYou(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  // Thank You Page
  if (showThankYou) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-lg">
          <div className="text-center p-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-green-600">
              {formType === "resume" ? "Resume Submitted!" : "Message Sent!"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {formType === "resume" 
                ? "Thank you for your interest! Our HR team will review your resume and get back to you soon."
                : "Thank you for reaching out! Our HR team will respond to your inquiry promptly."
              }
            </p>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
              <h3 className="font-semibold mb-2">Need Immediate Support?</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2 text-primary">
                  <Phone className="h-4 w-4" />
                  <span>+91 8814930229</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-primary">
                  <Mail className="h-4 w-4" />
                  <span>hr@hiverift.com</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>We'll respond promptly</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button onClick={resetForm} variant="outline" className="w-full">
                {formType === "resume" ? "Submit Another Resume" : "Send Another Message"}
              </Button>
              <Button onClick={handleClose} className="w-full">
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {formType === "resume" ? "Submit Your Resume" : "Contact HR"}
          </DialogTitle>
          <DialogDescription>
            {formType === "resume" 
              ? "Upload your resume and tell us about your interest in joining HiveRift."
              : "Get in touch with our HR team for any career-related inquiries."
            }
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 p-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="currentRole">Current Role/Title</Label>
                <Input
                  id="currentRole"
                  name="currentRole"
                  value={formData.currentRole}
                  onChange={handleChange}
                  placeholder="e.g., Software Developer"
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Professional Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="experience">Years of Experience</Label>
                <Select onValueChange={(value) => setFormData({...formData, experience: value})}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="2-3">2-3 years</SelectItem>
                    <SelectItem value="4-5">4-5 years</SelectItem>
                    <SelectItem value="6-8">6-8 years</SelectItem>
                    <SelectItem value="9-12">9-12 years</SelectItem>
                    <SelectItem value="12+">12+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="department">Department of Interest</Label>
                <Select onValueChange={(value) => setFormData({...formData, department: value})}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                    <SelectItem value="hr">Human Resources</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {formType === "resume" && (
              <div>
                <Label htmlFor="position">Position of Interest (Optional)</Label>
                <Input
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="e.g., Senior Full Stack Developer"
                  className="mt-1"
                />
              </div>
            )}
          </div>

          {/* Resume Upload (only for resume form) */}
          {formType === "resume" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Resume Upload</h3>
              <div>
                <Label htmlFor="resume">Upload Resume *</Label>
                <div className="mt-1">
                  <div className="relative">
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required={formType === "resume"}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                  {formData.resumeFile && (
                    <div className="flex items-center gap-2 mt-2 text-sm text-green-600">
                      <Upload className="h-4 w-4" />
                      <span>{formData.resumeFile.name}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Message */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {formType === "resume" ? "Cover Letter / Message" : "Message"}
            </h3>
            <div>
              <Label htmlFor="message">
                {formType === "resume" ? "Tell us why you'd like to join HiveRift" : "How can we help you?"} *
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder={
                  formType === "resume" 
                    ? "Share your motivation, career goals, and what interests you about HiveRift..."
                    : "Please describe your inquiry or question..."
                }
                required
                className="mt-1"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1">
              {formType === "resume" ? "Submit Resume" : "Send Message"}
            </Button>
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}