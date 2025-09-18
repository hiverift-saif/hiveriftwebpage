import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Shield, Eye, Lock, Mail, Phone } from "lucide-react";

export function PrivacyPolicyPage() {
  return (
    <div className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Shield className="h-12 w-12 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how HiveRift collects, uses, and protects your personal information.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            <strong>Effective Date:</strong> January 1, 2025 | <strong>Last Updated:</strong> January 1, 2025
          </p>
        </div>

        <div className="space-y-8">
          {/* Information We Collect */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Eye className="h-6 w-6 text-blue-400" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Personal Information</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Name, email address, phone number</li>
                  <li>Company information and job title</li>
                  <li>Project requirements and specifications</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technical Information</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>IP address and browser information</li>
                  <li>Website usage analytics and patterns</li>
                  <li>Device and operating system details</li>
                  <li>Cookies and tracking technologies</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide and improve our services and customer support</li>
                <li>Communicate about projects, updates, and service offerings</li>
                <li>Process payments and manage client accounts</li>
                <li>Analyze website usage to enhance user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Service Providers:</strong> Trusted partners who assist in service delivery (hosting, payment processing, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or legal process</li>
                <li><strong>Business Protection:</strong> To protect our rights, property, or safety, or that of our clients</li>
                <li><strong>Business Transfer:</strong> In connection with a merger, acquisition, or sale of business assets</li>
                <li><strong>Consent:</strong> When you explicitly consent to sharing with third parties</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Lock className="h-6 w-6 text-blue-400" />
                Data Security and Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and database protection</li>
                <li>Regular security audits and updates</li>
                <li>Limited access controls and authentication</li>
                <li>Employee training on data protection</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Your Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Access:</strong> Request copies of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
              </ul>
              <p className="text-gray-300 mt-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@hiverift.com" className="text-blue-400 hover:underline">privacy@hiverift.com</a>
              </p>
            </CardContent>
          </Card>

          {/* Cookies and Tracking */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                We use cookies and similar technologies to improve your experience on our website:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Essential Cookies</h4>
                  <p className="text-gray-300 text-sm">Required for website functionality and cannot be disabled.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                  <p className="text-gray-300 text-sm">Help us understand website usage and improve performance.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Marketing Cookies</h4>
                  <p className="text-gray-300 text-sm">Used to deliver relevant advertisements and track campaign effectiveness.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Functional Cookies</h4>
                  <p className="text-gray-300 text-sm">Remember your preferences and settings for a better experience.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Client Information:</strong> Retained for the duration of our business relationship plus 7 years for legal and tax purposes</li>
                <li><strong>Marketing Data:</strong> Retained until you unsubscribe or request deletion</li>
                <li><strong>Website Analytics:</strong> Retained for 26 months maximum</li>
                <li><strong>Support Communications:</strong> Retained for 3 years for quality and training purposes</li>
                <li><strong>Legal Compliance:</strong> Some data may be retained longer to comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </CardContent>
          </Card>

          {/* International Transfers */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Your information may be transferred to and processed in countries other than your own. We ensure adequate protection through appropriate safeguards such as:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mt-2">
                <li>Standard contractual clauses approved by relevant authorities</li>
                <li>Adequacy decisions by regulatory bodies</li>
                <li>Certification schemes and codes of conduct</li>
              </ul>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-blue-900/20 border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-blue-400" />
                Contact Us
              </CardTitle>
              <CardDescription>
                If you have any questions about this Privacy Policy, please contact us:
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-blue-400">privacy@hiverift.com</p>
                  <p className="text-blue-400">info@hiverift.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone & Website</h4>
                  <p className="text-gray-300">+91-7011-050-786</p>
                  <p className="text-blue-400">www.hiverift.com</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Mailing Address</h4>
                <p className="text-gray-300">
                  HiveRift<br />
                  Privacy Officer<br />
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
            This Privacy Policy is governed by the laws of India and any disputes will be resolved in the courts of Delhi, India.
          </p>
        </div>
      </div>
    </div>
  );
}