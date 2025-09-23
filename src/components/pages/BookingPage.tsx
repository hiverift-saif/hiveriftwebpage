import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Calendar } from "../ui/calendar";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { 
  Phone, 
  Video, 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  User,
  Building,
  Mail
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


interface BookingPageProps {
  onNavigate: (page: string) => void;
}

export function BookingPage({ onNavigate }: BookingPageProps) {
    const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [meetingType, setMeetingType] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    consultationType: "",
    message: ""
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Available time slots
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
  ];

  const consultationTypes = [
    "Website Development",
    "Mobile App Development", 
    "UI/UX Design",
    "MVP Development",
    "Digital Marketing",
    "Business Consulting",
    "Technology Consultation",
    "Project Assessment",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Confirmation Page
  if (showConfirmation) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-12">
              <CardContent>
                <div className="mb-8">
                  <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h1 className="text-4xl font-bold mb-4 text-green-600">Consultation Booked!</h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Your consultation has been successfully scheduled. We'll send you a confirmation email with meeting details.
                  </p>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">Meeting Details</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <CalendarIcon className="h-5 w-5 text-primary" />
                      <span>{selectedDate?.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>{selectedTime}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {meetingType === "google-meet" ? (
                        <Video className="h-5 w-5 text-primary" />
                      ) : (
                        <Phone className="h-5 w-5 text-primary" />
                      )}
                      <span>{meetingType === "google-meet" ? "Google Meet" : "Telephonic Call"}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-2 text-blue-800">Need to Reschedule?</h3>
                  <p className="text-blue-700 mb-4">
                    If you need to make changes to your appointment, please contact us:
                  </p>
                  <div className="flex items-center justify-center gap-2 text-blue-600 font-bold text-lg">
                    <Phone className="h-5 w-5" />
                    <span>+91 8814930229</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    onClick={() => setShowConfirmation(false)}
                    variant="outline" 
                    className="w-full"
                  >
                    Book Another Consultation
                  </Button>
                  <Button 
                    onClick={() => onNavigate('/')}
                    className="w-full"
                  >
                    Return to Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/contact')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Contact
          </Button>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book a Consultation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Schedule a free 30-minute consultation to discuss your project requirements and explore how we can help transform your business.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calendar and Time Selection */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Select Date & Time
                </CardTitle>
                <CardDescription>
                  Choose your preferred date and time for the consultation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Calendar */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Choose Date</Label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                    className="rounded-md border"
                  />
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div>
                    <Label className="text-base font-semibold mb-3 block">Available Times</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                          className="text-sm"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Meeting Type Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Meeting Type</CardTitle>
                <CardDescription>
                  Choose how you'd like to conduct the consultation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={meetingType} onValueChange={setMeetingType}>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value="google-meet" id="google-meet" />
                    <div className="flex items-center gap-3 flex-1">
                      <Video className="h-5 w-5 text-blue-600" />
                      <div>
                        <Label htmlFor="google-meet" className="font-semibold">Google Meet</Label>
                        <p className="text-sm text-muted-foreground">Video call via Google Meet</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Recommended</Badge>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value="phone" id="phone" />
                    <div className="flex items-center gap-3 flex-1">
                      <Phone className="h-5 w-5 text-green-600" />
                      <div>
                        <Label htmlFor="phone" className="font-semibold">Telephonic Call</Label>
                        <p className="text-sm text-muted-foreground">Voice call to your phone number</p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* Consultation Form */}
          <Card>
            <CardHeader>
              <CardTitle>Consultation Details</CardTitle>
              <CardDescription>
                Tell us about yourself and what you'd like to discuss.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Company *
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <Select onValueChange={(value) => setFormData({...formData, industry: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="consultationType">Consultation Type *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, consultationType: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="What would you like to discuss?" />
                      </SelectTrigger>
                      <SelectContent>
                        {consultationTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Project Details & Goals</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Please describe your project, goals, timeline, and any specific questions you'd like to discuss during the consultation..."
                    className="mt-2"
                  />
                </div>

                <div className="bg-muted/50 border border-border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">What to Expect:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 30-minute consultation with our expert team</li>
                    <li>• Discussion of your project requirements and goals</li>
                    <li>• Technology recommendations and approach</li>
                    <li>• Timeline and budget estimation</li>
                    <li>• Next steps and proposal outline</li>
                  </ul>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={!selectedDate || !selectedTime || !meetingType || !formData.consultationType}
                >
                  Book Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}