import Container from "../../../components/common/Container";

export const metadata = {
  title: "Terms of Service | SAFETY Platform",
  description: "Terms of Service of the SAFETY Platform - read our legal agreements, user responsibilities, and guidelines.",
};

export default function TermsOfServicePage() {
  return (
    <Container className="py-16 md:py-24 text-[var(--primary-2)] min-h-screen">
      <div className="max-w-[1420px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end border-b border-[var(--tertiary-2)] pb-6 mb-12 gap-6">
          <h1 className="text-[2.25rem] md:text-[3.125rem] font-bold text-white tracking-tight leading-none">
            Terms of Service
          </h1>
          <div className="text-[0.875rem] text-[var(--primary-2)] space-y-1 lg:text-right font-light">
            <p>Updated <span className="font-bold text-white">30 Nov 2025</span></p>
            <p>Domain <span className="font-bold text-white">sftyhub.com</span></p>
            <p>Operator <span className="font-bold text-white">SAFETY Foundation (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;)</span></p>
          </div>
        </div>

        {/* Document Sections */}
        <div className="space-y-8 text-[var(--primary-2)] text-[0.9375rem] md:text-[1rem] leading-relaxed font-light">
          
          {/* Section 1 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              1. Welcome &amp; Binding Effect
            </h2>
            <p className="mb-4">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of sftyhub.com and the SAFETY dashboard/interface (together, the &ldquo;Services&rdquo;). By accessing or using the Services, you agree to these Terms, our Privacy Policy, and any other policies referenced herein (collectively, the &ldquo;Agreement&rdquo;). If you do not agree, do not use the Services.
            </p>
            <p>
              <strong className="text-white font-bold">Arbitration Notice:</strong> These Terms include a binding arbitration clause and a class-action waiver. Please read Section 17 carefully.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              2. What the Services Are
            </h2>
            <div className="pl-4 space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p>
                  SAFETY is a reward-based, non-custodial ecosystem in which users can earn points, convert points to tokens, and connect self-custody wallets to interact with supported networks and features.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p>
                  We do not take possession, custody, or control of users&rsquo; private keys or assets.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p>
                  To interact with tokens or on-chain features, you will use a third-party self-custody wallet (e.g., MetaMask, Trust Wallet). Those wallets are governed by their own terms and privacy policies, which you must review.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p>
                  Content we provide (docs, data, blog posts, tutorials, dashboards, and any UI copy) is for informational purposes only and is not financial, legal, or tax advice.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              3. Eligibility &amp; Changes
            </h2>
            <div className="pl-4 space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p>
                  You must be legally able to enter into a contract to use the Services.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p>
                  We may change the Services or these Terms at any time in our sole discretion. If you continue to use the Services after changes take effect, you agree to the updated Terms. We may also modify or discontinue all or part of the Services without liability.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              4. Your Responsibilities &amp; Key Risks
            </h2>
            <div className="pl-4 space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p>
                  <strong className="text-white font-bold">Blockchain Risks:</strong> Smart contracts, tokens, and related technologies are experimental and risky. Bugs, forks, attacks, congestion, failed or reverted transactions, and price volatility can cause losses.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p>
                  <strong className="text-white font-bold">Irreversibility:</strong> On-chain transactions are often final and non-refundable.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p>
                  <strong className="text-white font-bold">Wallet Security:</strong> Your wallet (including private keys/seed phrase) is your sole responsibility. We cannot access or recover it.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p>
                  <strong className="text-white font-bold">Third-Party Services:</strong> We do not control or guarantee third-party wallets, protocols, bridges, or on/off-ramp services. Use them at your own risk.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              5. Fees
            </h2>
            <p>
              Your use of blockchain networks and third-party services may incur gas fees, protocol fees, bridge fees, liquidity/provider fees, or other charges. Fees may be non-refundable even if a transaction fails. You are solely responsible for all costs.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              6. Prohibited Conduct
            </h2>
            <p className="mb-3">You agree not to:</p>
            <div className="pl-4 space-y-3 mb-3">
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p>Engage in unlawful activity (e.g., money laundering, sanctions evasion, terrorist financing, illegal transactions).</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p>Circumvent security, access restrictions, usage limits, or geofencing; interfere with the Services; deploy malware.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p>Scrape, harvest, or mine data without authorization; perform unauthorized automated access.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p>Reverse engineer, decompile, or attempt to derive source code; exploit any smart contract or protocol.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p>Impersonate others or use false credentials; manipulate markets or collude.</p>
              </div>
            </div>
            <p>We may restrict or terminate access if we reasonably suspect violations.</p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              7. Ownership &amp; License
            </h2>
            <p>
              Subject to your compliance with the Agreement, we grant you a personal, revocable, non-exclusive, non-transferable license to use the Services as permitted by these Terms. All intellectual property in the Services remains with us or our licensors. You grant us a free, worldwide right to use any feedback you submit.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              8. Content, Links &amp; Third Parties
            </h2>
            <p>
              The Services may link to or integrate third-party sites, wallets, protocols, analytics, and communication tools (e.g., Telegram). We do not control or endorse third-party content or services and are not responsible for them. Your interactions with third parties are solely between you and them.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              9. Disclaimers
            </h2>
            <p className="uppercase">
              THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo; TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not guarantee the accuracy, completeness, timeliness, availability, security, or error-free operation of the Services.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              10. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, we will not be liable for any indirect, special, incidental, consequential, exemplary, punitive, or lost profits damages, nor for losses arising from user error (e.g., lost keys), network or wallet failures, forks, attacks, protocol changes, price changes, regulatory changes, force majeure, or actions of third parties. Aggregate cap: our total cumulative liability to you for all claims is USD $1,000. Some jurisdictions do not allow certain limitations; where prohibited, those limits will apply only to the extent permitted by law.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              11. Indemnification
            </h2>
            <p className="mb-3">
              You agree to indemnify, defend, and hold harmless SAFETY Foundation and its affiliates, officers, directors, employees, and agents from any claims, damages, liabilities, and expenses (including reasonable attorneys&rsquo; fees) arising out of:
            </p>
            <div className="space-y-1">
              <p>(i) your breach of the Agreement;</p>
              <p>(ii) your misuse of the Services or any related smart contract;</p>
              <p>(iii) your violation of law or third-party rights; or (iv) your use of third-party products or services.</p>
            </div>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              12. Access Restrictions &amp; Sanctions
            </h2>
            <p>
              We may restrict or block access if we reasonably suspect illegal use, fraud, security threats, sanctions exposure, or other violations. This includes where you or your wallet is on applicable sanctions lists or you are located in sanctioned jurisdictions.
            </p>
          </div>

          {/* Section 13 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              13. Taxes
            </h2>
            <p>
              You are solely responsible for all taxes, duties, and assessments associated with your use of the Services and your on-chain transactions.
            </p>
          </div>

          {/* Section 14 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              14. Termination &amp; Service Changes
            </h2>
            <p>
              You may stop using the Services at any time. We may suspend, restrict, or terminate the Services (in whole or in part) or your access at any time for any reason we deem appropriate, without liability.
            </p>
          </div>

          {/* Section 15 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              15. Severability &amp; Assignment
            </h2>
            <p>
              If any provision of these Terms is found invalid or unenforceable, the remaining provisions remain in full force. We may assign the Agreement. You may not assign or transfer your rights or obligations without our prior written consent.
            </p>
          </div>

          {/* Section 16 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              16. Governing Law
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of Singapore, without regard to conflict-of-laws rules.
            </p>
          </div>

          {/* Section 17 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              17. Dispute Resolution &mdash; Arbitration &amp; Waiver
            </h2>
            <p className="mb-4">
              <strong className="text-white font-bold">Good-Faith Resolution First.</strong> Before starting any legal proceeding, the parties will attempt to resolve disputes in good faith. The complaining party must send written notice describing the dispute. The recipient has 30 days to respond. Within 60 days of the initial notice, the parties will confer by video or phone. If unresolved within 90 days, either party may proceed to arbitration.
            </p>
            <p className="mb-4">
              <strong className="text-white font-bold">Binding Arbitration (SIAC).</strong> Any dispute not resolved through the above process shall be finally settled by binding arbitration under the Singapore International Arbitration Centre (SIAC) Rules.
            </p>
            
            <div className="pl-4 space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p><span className="text-white font-medium">Seat of arbitration:</span> Singapore</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p><span className="text-white font-medium">Language:</span> English</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p><span className="text-white font-medium">Arbitrator expertise:</span> internet technology, software, financial transactions, and ideally blockchain</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p><span className="text-white font-medium">Costs:</span> the prevailing party may recover reasonable attorneys&rsquo; fees and costs, where permitted</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-bold mt-1">•</span>
                <p><span className="text-white font-medium">Confidentiality:</span> the existence and content of the arbitration are confidential unless disclosure is required by law</p>
              </div>
            </div>

            <p>
              <strong className="text-white font-bold">No Jury; No Class Actions.</strong> You and we waive any right to a jury trial and to participate in a class action or class-wide arbitration. Unless both parties agree otherwise in writing, the arbitrator may not consolidate claims or preside over a class or representative proceeding.
            </p>
          </div>

          {/* Section 18 */}
          <div>
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              18. Entire Agreement
            </h2>
            <p>
              These Terms, our Privacy Policy, and any policies posted on the Services constitute the entire agreement between you and us and supersede all prior or contemporaneous understandings.
            </p>
          </div>

          {/* Section 19 */}
          <div className="pb-16">
            <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-white mt-8 mb-3">
              19. Contact
            </h2>
            <p>
              Questions about these Terms? Contact us at:{" "}
              <a href="mailto:legal@sftyhub.com" className="text-white font-bold hover:underline transition-all">
                legal@sftyhub.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </Container>
  );
}
