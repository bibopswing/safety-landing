import Container from "../../../components/common/Container";

export const metadata = {
  title: "Privacy Policy | SAFETY Platform",
  description: "Privacy Policy of the SAFETY Platform - read our terms, data collection policies, and safety standards.",
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-16 md:py-24 text-[var(--primary-2)] min-h-screen">
      <div className="max-w-[1420px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-row justify-between items-baseline border-b border-[var(--tertiary-2)] pb-6 mb-12">
          <h1 className="text-[2.25rem] md:text-[3.125rem] font-bold text-white tracking-tight leading-none">
            Privacy Policy
          </h1>
          <p className="text-[0.875rem] text-[var(--primary-2)] font-light">
            Updated <span className="font-bold text-white">21 Nov 2025</span>
          </p>
        </div>

        {/* Intro Section */}
        <div className="space-y-6 text-[var(--primary-2)] text-[0.9375rem] md:text-[1rem] leading-relaxed mb-12 font-light">
          <p>
            The SAFETY Platform operates as a decentralized, reward-based ecosystem combining secure user participation, point mining, and wallet integration. Although we may collect and process information from users of <a href="https://sftyhub.com" className="text-white hover:underline transition-all">Sftyhub.com</a> and the SAFETY Dashboard in accordance with this Privacy Policy, we do not possess information about all protocol users beyond what is already publicly available on the blockchain.
          </p>
          <p>
            This Privacy Policy (&ldquo;Policy&rdquo;) explains how the SAFETY Foundation (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, and shares personal information in connection with our Services, as well as your rights and choices regarding such information, in accordance with applicable data protection laws, including the Personal Data Protection Act 2012 (PDPA) of Singapore and other relevant international data protection regulations (collectively, &ldquo;Data Protection Legislation&rdquo;).
          </p>
          <p>
            By using our Services, you consent to the collection, use, and disclosure of your information as described in this Policy. If you do not agree to these terms, please refrain from using <a href="https://sftyhub.com" className="text-white hover:underline transition-all">Safetyhub.com</a>, the SAFETY Wallet, or the SAFETY Dashboard.
          </p>
          <p>
            If you are an individual user, this Policy applies directly to you.
          </p>
          <p>
            If you represent an organization that provides us with personal data of individuals connected to you, please ensure that those individuals are informed of this Policy.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8 text-[var(--primary-2)] text-[0.9375rem] md:text-[1rem] leading-relaxed font-light">
          
          {/* Section 1 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              1. Information We Collect
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-[1rem] font-bold text-white mb-2">
                  A. Information You Provide
                </h3>
                <p className="mb-3">We may collect the following information when you use our Services:</p>
                <div className="pl-4 space-y-3">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-white font-bold">•</span>
                      <span className="text-white font-bold">Account &amp; Correspondence:</span>
                    </div>
                    <p className="pl-4 mt-1">
                      When you create an account, participate in point mining, or contact us for support, you may provide details such as your email address, device type, wallet address, or contextual information (e.g., mining session logs, transaction IDs, or screenshots).
                    </p>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-white font-bold">•</span>
                      <span className="text-white font-bold">Voluntary Data:</span>
                    </div>
                    <p className="pl-4 mt-1">
                      You may voluntarily provide additional information (such as profile or referral details). In such cases, you are solely responsible for that information.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[1rem] font-bold text-white mb-2">
                  B. Information Collected Automatically
                </h3>
                <div className="pl-4 space-y-3">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-white font-bold">•</span>
                      <span className="text-white font-bold">Wallet Address:</span>
                    </div>
                    <p className="pl-4 mt-1">
                      We may collect your wallet address for the purposes of verification, token conversion, or blocking wallets associated with suspicious or unlawful activity. We may also use it for analytics and improving user experience.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-white font-bold">•</span>
                      <span className="text-white font-bold">Device Information:</span>
                    </div>
                    <p className="pl-4 mt-1">
                      SAFETY may collect your device type, operating system, browser, and screen resolution to optimize the user interface and performance across devices.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-white font-bold">•</span>
                      <span className="text-white font-bold">Usage Data:</span>
                    </div>
                    <p className="pl-4 mt-1">
                      We may collect logs related to mining, point conversion, wallet linking, and interactions within the SAFETY Dashboard or Telegram Bot. This data helps us analyze engagement patterns and enhance functionality.
                    </p>
                  </div>
                </div>
                <p className="mt-4">
                  We do not make decisions that have legal or significant effects on you solely based on automated processing of your personal data.
                </p>
                <p className="mt-2">
                  For details on tracking technologies, see the Cookie and Analytics sections below.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              2. Use of Information
            </h2>
            <p className="mb-3">
              We collect and use information for legitimate business purposes in accordance with this Policy and applicable laws, including when necessary to:
            </p>
            <div className="pl-4 space-y-3">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-bold">•</span>
                  <span className="text-white font-bold">Operate and Manage the Services:</span>
                </div>
                <p className="pl-4 mt-1">
                  Provide, maintain, and secure the SAFETY ecosystem; verify users; prevent fraud or abuse; enforce terms; provide customer support; send notifications and updates.
                </p>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-bold">•</span>
                  <span className="text-white font-bold">Improve and Personalize the Experience:</span>
                </div>
                <p className="pl-4 mt-1">
                  Analyze user behavior to optimize mining rewards, interface performance, and security features.
                </p>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-bold">•</span>
                  <span className="text-white font-bold">Compliance and Security:</span>
                </div>
                <p className="pl-4 mt-1">
                  Detect suspicious transactions, prevent misuse of tokens, and comply with applicable legal or regulatory obligations.
                </p>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-bold">•</span>
                  <span className="text-white font-bold">Business Operations:</span>
                </div>
                <p className="pl-4 mt-1">
                  Support mergers, investments, or reorganization involving SAFETY Foundation assets.
                </p>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-bold">•</span>
                  <span className="text-white font-bold">Consent-Based Activities:</span>
                </div>
                <p className="pl-4 mt-1">
                  Use your data for marketing, airdrops, or partnership programs when you have given explicit consent.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              3. Information Sharing and Disclosure
            </h2>
            <p className="mb-3">
              We may share information only as permitted by this Policy and for the following purposes:
            </p>
            <div className="pl-4 space-y-3">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-bold">•</span>
                  <span className="text-white font-bold">Affiliates &amp; Partners:</span>
                </div>
                <p className="pl-4 mt-1">
                  With SAFETY's affiliated entities, ecosystem partners, or service providers assisting in wallet services, analytics, or token operations.
                </p>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-bold">•</span>
                  <span className="text-white font-bold">Professional Advisors:</span>
                </div>
                <p className="pl-4 mt-1">
                  With legal, accounting, and compliance professionals for audits or regulatory obligations.
                </p>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-bold">•</span>
                  <span className="text-white font-bold">Third-Party Service Providers:</span>
                </div>
                <p className="pl-4 mt-1">
                  For hosting, analytics, anti-fraud detection, and blockchain transaction monitoring - under strict confidentiality and purpose limitations.
                </p>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-bold">•</span>
                  <span className="text-white font-bold">Regulatory Authorities:</span>
                </div>
                <p className="pl-4 mt-1">
                  When required by applicable laws, lawful requests, or enforcement proceedings.
                </p>
              </div>
            </div>
            <p className="mt-4">
              We may also share aggregated or de-identified data, provided it does not identify any individual user.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              4. Third-Party Services
            </h2>
            <p>
              Our Services may integrate third-party technologies such as external wallets (e.g., MetaMask, Trust Wallet), analytics tools, and communication platforms (e.g., Telegram Bot). When you interact with third-party systems, their own terms and privacy policies apply. We encourage you to review them before use.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              5. Cookies Policy
            </h2>
            <p>
              We currently do not use cookies on <a href="https://sftyhub.com" className="text-white hover:underline transition-all font-normal">Sftyhub.com</a>. If implemented in the future, cookies will be used only to enhance performance and analytics. Cookies help analyze site traffic and improve usability. You can control or disable cookies in your browser settings at any time.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              6. Analytics
            </h2>
            <p>
              We may use Firebase Analytics, Google Analytics, or similar tools to understand user interactions and improve the SAFETY experience. Analytics tracking applies only to users who opt in. You can opt out anytime via your browser settings or the &ldquo;Manage Analytics&rdquo; section of your account.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              7. Data Security
            </h2>
            <p>
              We maintain reasonable administrative and technical safeguards to protect your information from loss, misuse, or unauthorized access. However, no internet transmission is completely secure, and we cannot guarantee absolute protection.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              8. Data Retention
            </h2>
            <p>
              Your information is retained only as long as necessary for the purposes outlined in this Policy or as required by law. When deletion is requested, we may continue to retain limited information for legal, tax, or security reasons.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              9. International Transfers
            </h2>
            <p>
              Data collected through SAFETY Services may be processed in Singapore, the European Economic Area (EEA), or other jurisdictions. By using the Services, you consent to such transfers in compliance with applicable data protection laws.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              10. Your Rights
            </h2>
            <p className="mb-3">Under the PDPA and international data protection laws, you may have the right to:</p>
            <div className="pl-4 space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-white font-bold">•</span>
                <span>Access and obtain a copy of your data</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-white font-bold">•</span>
                <span>Request correction or deletion</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-white font-bold">•</span>
                <span>Restrict or object to processing</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-white font-bold">•</span>
                <span>Withdraw consent at any time</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-white font-bold">•</span>
                <span>Lodge a complaint with a relevant authority</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-white font-bold">•</span>
                <span>To exercise these rights, contact us using the details below.</span>
              </div>
            </div>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              11. Children
            </h2>
            <p>
              SAFETY Services are intended for users who are legally permitted to participate in digital asset or online activities. We do not knowingly collect data from minors. If you believe a child&rsquo;s data has been collected, contact us for immediate deletion.
            </p>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              12. Changes to This Policy
            </h2>
            <p>
              We reserve the right to modify or update this Privacy Policy at any time. Updates will be posted on <a href="https://sftyhub.com" className="text-white hover:underline transition-all font-normal">Sftyhub.com</a>, and continued use of our Services after posting means you accept the revised terms.
            </p>
          </div>

          {/* Section 13 */}
          <div className="pb-16">
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              13. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or SAFETY&rsquo;s data practices, please contact us at:{" "}
              <a href="mailto:privacy@safetyhub.com" className="text-white font-bold hover:underline transition-all">
                privacy@safetyhub.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </Container>
  );
}
