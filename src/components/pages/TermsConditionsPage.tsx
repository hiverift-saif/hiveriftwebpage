import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { FileText, AlertTriangle, Shield, Mail, DollarSign, Ban } from "lucide-react";

export function TermsConditionsPage() {
  return (
    <div className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <FileText className="h-12 w-12 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Please read these Terms and Conditions carefully before using our services at <span className="text-blue-400">www.hiverift.com</span>
          </p>
          <p className="text-sm text-gray-400 mt-4">
            <strong>Effective Date:</strong> January 1, 2025 | <strong>Last Updated:</strong> January 1, 2025
          </p>
        </div>

        <div className="space-y-8">
          {/* Agreement to Terms */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                By accessing and using our website <strong>www.hiverift.com</strong> and our services, you accept and agree to be bound by the terms and provision of this agreement. 
                These Terms and Conditions constitute a legally binding agreement between you and HiveRift.
              </p>
            </CardContent>
          </Card>

          {/* About HiveRift */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>About HiveRift</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                HiveRift is a digital solutions company providing custom website design & development, mobile app development, 
                MVP development, UI/UX design, blockchain solutions, digital marketing, operations consultancy, virtual assistant services, 
                and other technology solutions to businesses worldwide.
              </p>
            </CardContent>
          </Card>

          {/* Services and Scope */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Services and Scope</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Our Services Include:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Custom Website Design & Development</li>
                  <li>Mobile App Development (iOS/Android)</li>
                  <li>MVP Development & Testing</li>
                  <li>UI/UX Design & Prototyping</li>
                  <li>Blockchain Solutions & DApps</li>
                  <li>E-commerce Development</li>
                  <li>API Development & Integration</li>
                  <li>Digital Marketing Services</li>
                  <li>Operations Consultancy</li>
                  <li>Virtual Assistant Services</li>
                  <li>Brand Identity Design</li>
                  <li>Cloud Migration Services</li>
                  <li>DevOps & Automation</li>
                  <li>Database Management</li>
                  <li>Ongoing Maintenance & Support</li>
                </ul>
              </div>
              <p className="text-gray-300">
                All services are provided according to the specifications outlined in individual project agreements and proposals.
              </p>
            </CardContent>
          </Card>

          {/* Payment Terms & No Refund Policy */}
          <Card className="bg-red-900/20 border-red-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Ban className="h-6 w-6 text-red-400" />
                Payment Terms & No Refund Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-900/30 border border-red-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                  <h4 className="font-semibold text-red-400">IMPORTANT: NO REFUND POLICY</h4>
                </div>
                <p className="text-red-200">
                  <strong>Once an agreement is signed and payment is made, NO REFUNDS will be provided under any circumstances.</strong> 
                  All work will proceed according to the signed agreement and project specifications.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Payment Structure:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Payment schedules are defined in individual project agreements</li>
                  <li>Milestone payments may be required for larger projects</li>
                  <li>Payment methods include bank transfer, online payment gateways, and other approved methods</li>
                  <li>Late payment fees may apply as specified in the agreement</li>
                  <li>All prices are subject to applicable taxes</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Agreement Compliance:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>All deliverables will be provided according to the signed agreement</li>
                  <li>Project timelines are estimates and may vary based on complexity and client feedback</li>
                  <li>Scope changes require written agreement and may incur additional costs</li>
                  <li>Client responsibilities must be fulfilled for project completion</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Client Responsibilities */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Client Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide accurate and complete project requirements</li>
                <li>Supply necessary content, assets, and access credentials in a timely manner</li>
                <li>Respond to requests for feedback and approvals within agreed timeframes</li>
                <li>Make payments according to the agreed schedule</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights of third parties</li>
                <li>Provide constructive feedback during project development phases</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Client Ownership:</h4>
                <p className="text-gray-300">
                  Upon full payment completion, clients receive ownership rights to custom-developed code, designs, and content created specifically for their project.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">HiveRift Retained Rights:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Proprietary frameworks, tools, and methodologies</li>
                  <li>General knowledge and expertise gained during projects</li>
                  <li>Right to showcase work in portfolio (with client consent)</li>
                  <li>Third-party licenses and open-source components</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Third-Party Content:</h4>
                <p className="text-gray-300">
                  Clients are responsible for ensuring they have rights to use any third-party content, images, or materials provided for the project.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Project Timelines */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Project Timelines and Delivery</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                Project timelines are estimates based on project scope and complexity. Actual delivery may vary due to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Changes in project requirements or scope</li>
                <li>Delays in client feedback or approval</li>
                <li>Technical challenges or third-party dependencies</li>
                <li>Force majeure events beyond our control</li>
                <li>Client-provided content or asset delays</li>
              </ul>
              <p className="text-gray-300">
                We commit to communicating any timeline changes promptly and working to minimize delays.
              </p>
            </CardContent>
          </Card>

          {/* Warranty and Support */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Warranty and Post-Launch Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Limited Warranty:</h4>
                <p className="text-gray-300">
                  We provide a limited warranty for bug fixes and technical issues for 30 days post-launch, 
                  excluding issues caused by third-party services, hosting environment, or client modifications.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Ongoing Support:</h4>
                <p className="text-gray-300">
                  Ongoing maintenance, updates, and support services are available under separate agreements 
                  with defined scope and pricing.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                HiveRift's total liability for any claims arising from our services shall not exceed the total amount paid by the client for the specific project. We are not liable for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Data loss not caused by our negligence</li>
                <li>Third-party service failures or interruptions</li>
                <li>Force majeure events (natural disasters, pandemics, etc.)</li>
                <li>Client-caused delays or scope changes</li>
              </ul>
            </CardContent>
          </Card>

          {/* Confidentiality */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-blue-400" />
                Confidentiality and Data Protection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                We maintain strict confidentiality of all client information and project details. 
                All team members sign non-disclosure agreements. We implement appropriate security measures 
                to protect client data and comply with applicable data protection regulations.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Termination by Client:</h4>
                <p className="text-gray-300">
                  Clients may terminate projects with written notice. <strong>No refunds will be provided for work completed or payments made.</strong> 
                  Clients will receive deliverables completed up to the termination date.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Termination by HiveRift:</h4>
                <p className="text-gray-300">
                  We reserve the right to terminate agreements for non-payment, breach of terms, or unethical client behavior. 
                  In such cases, payment for completed work remains due.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Force Majeure */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Force Majeure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                HiveRift shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, 
                including but not limited to natural disasters, pandemics, government actions, cyber attacks, or third-party service failures.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Governing Law and Jurisdiction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms or our services 
                shall be subject to the exclusive jurisdiction of the courts in Delhi, India.
              </p>
            </CardContent>
          </Card>

          {/* Modifications */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Modifications to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                HiveRift reserves the right to modify these Terms and Conditions at any time. 
                Updates will be posted on our website at <strong>www.hiverift.com</strong> with the revised effective date. 
                Continued use of our services constitutes acceptance of the updated terms.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-blue-900/20 border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-blue-400" />
                Contact Information
              </CardTitle>
              <CardDescription>
                For questions about these Terms and Conditions, please contact us:
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-blue-400">legal@hiverift.com</p>
                  <p className="text-blue-400">info@hiverift.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone & Website</h4>
                  <p className="text-gray-300">+91-7011-050-786</p>
                  <p className="text-blue-400">www.hiverift.com</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Business Address</h4>
                <p className="text-gray-300">
                  HiveRift<br />
                  Legal Department<br />
                  New Delhi, India
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12 bg-gray-800" />

        <div className="text-center text-sm text-gray-400">
          <p>© 2025 HiveRift. All rights reserved.</p>
          <p className="mt-2">
            By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
}