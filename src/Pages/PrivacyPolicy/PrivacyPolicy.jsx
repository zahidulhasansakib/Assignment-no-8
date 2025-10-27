import React from "react";
import { Link } from "react-router";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="full mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
          AppVibe Privacy Policy
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-8 italic text-center">
          Last Updated: October 9, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            1. Introduction
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Welcome to AppVibe, your trusted platform for discovering and
            downloading mobile applications. At AppVibe, we are committed to
            protecting your privacy and ensuring the security of your personal
            information. This Privacy Policy explains how we collect, use,
            share, and protect your data when you use our website, mobile app,
            or services ("Services"). By accessing AppVibe, you agree to the
            terms outlined in this policy. If you do not agree, please refrain
            from using our Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            2. Information We Collect
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We collect information to provide and improve our Services. The
            types of information we collect include:
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base leading-relaxed mt-2">
            <li>
              <strong>Personal Information:</strong> When you create an account,
              we may collect your name, email address, and profile preferences.
              You may also provide payment information for premium features.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect data on how you interact
              with AppVibe, such as apps you browse, download, or rate, and your
              search queries.
            </li>
            <li>
              <strong>Device Information:</strong> We may collect details about
              your device, including IP address, browser type, operating system,
              and device identifiers.
            </li>
            <li>
              <strong>Cookies and Tracking:</strong> We use cookies to enhance
              your experience, such as remembering your preferences and tracking
              site usage. You can manage cookie settings in your browser.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We use the collected information to:
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base leading-relaxed mt-2">
            <li>
              Provide and personalize our Services, such as recommending apps
              based on your interests.
            </li>
            <li>
              Process transactions and deliver premium features or
              subscriptions.
            </li>
            <li>
              Improve our platform by analyzing usage trends and user feedback.
            </li>
            <li>
              Communicate with you, including sending updates, promotions, or
              support responses.
            </li>
            <li>
              Ensure security by detecting and preventing fraudulent activities.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            4. Sharing Your Information
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We do not sell your personal information. We may share your data
            with:
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base leading-relaxed mt-2">
            <li>
              <strong>Third-Party Service Providers:</strong> We work with
              trusted partners for payment processing, analytics, and cloud
              storage, who are bound by strict confidentiality agreements.
            </li>
            <li>
              <strong>App Developers:</strong> Limited data (e.g., download
              statistics) may be shared with app developers to improve their
              services.
            </li>
            <li>
              <strong>Legal Compliance:</strong> We may disclose data if
              required by law or to protect our rights and users.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            5. Data Security
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We implement industry-standard security measures, including
            encryption and secure servers, to protect your data. However, no
            system is completely secure, and we encourage you to use strong
            passwords and avoid sharing sensitive information. If you suspect
            unauthorized access, contact us immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            6. Your Rights and Choices
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base leading-relaxed mt-2">
            <li>
              Access, update, or delete your personal information through your
              account settings.
            </li>
            <li>
              Opt out of promotional emails by clicking "Unsubscribe" in our
              communications.
            </li>
            <li>
              Disable cookies via your browser settings, though this may affect
              functionality.
            </li>
            <li>
              Request data portability or submit a complaint to a data
              protection authority.
            </li>
          </ul>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-2">
            To exercise these rights, contact us at privacy@appvibe.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            7. Third-Party Links
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            AppVibe may link to third-party websites or apps (e.g., developer
            pages). We are not responsible for their privacy practices. Please
            review their policies before providing personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            8. Children’s Privacy
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our Services are not intended for users under 13. We do not
            knowingly collect data from children. If you believe we have
            collected such data, please contact us to have it removed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            9. Updates to This Policy
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We may update this Privacy Policy to reflect changes in our
            practices or legal requirements. We will notify you via email or
            in-app notifications. The updated policy will be posted here with
            the "Last Updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            10. Contact Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            If you have questions about this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-2">
            <strong>Email:</strong> privacy@appvibe.com
            <br />
            <strong>Address:</strong> AppVibe Inc., 123 Tech Lane, Dhaka,
            Bangladesh
          </p>
        </section>

        <div className="text-center mt-8">
          <Link
            to="/"
            className="inline-block  text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] shadow-none font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
