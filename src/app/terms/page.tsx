import { type Metadata } from 'next'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Terms of Service',
}

export default function TermsPage() {
  return (
    <div className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: April 2026</p>

          <div className="mt-10 space-y-8 text-sm text-gray-700">
            <section>
              <h2 className="text-base font-semibold text-gray-900">
                Agreement to Terms
              </h2>
              <p className="mt-3">
                By downloading or using CrownCourt (&ldquo;the App&rdquo;), you
                agree to be bound by these Terms of Service. If you do not
                agree, do not use the App.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900">
                Description of Service
              </h2>
              <p className="mt-3">
                CrownCourt is a tennis match scoring application for Apple Watch
                with an iOS companion app. The App allows you to score tennis
                matches, track match history, and manage a player profile.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900">
                Accounts
              </h2>
              <p className="mt-3">
                You may create an account using Sign in with Apple. You are
                responsible for maintaining the security of your account
                credentials.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900">
                In-App Purchases
              </h2>
              <p className="mt-3">
                CrownCourt offers a &ldquo;Noble&rdquo; upgrade as a one-time
                in-app purchase. All purchases are processed through the Apple
                App Store and are subject to Apple&rsquo;s terms and conditions.
                Refund requests should be directed to Apple.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900">
                Acceptable Use
              </h2>
              <p className="mt-3">You agree not to:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Use the App for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the App&rsquo;s functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900">
                Intellectual Property
              </h2>
              <p className="mt-3">
                CrownCourt and all associated trademarks, logos, and content are
                the property of Marrache Group. You may not copy, modify, or
                distribute any part of the App without our prior written
                consent.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900">
                Disclaimers
              </h2>
              <p className="mt-3">
                The App is provided &ldquo;as is&rdquo; without warranties of
                any kind. We do not guarantee uninterrupted or error-free
                operation.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900">
                Limitation of Liability
              </h2>
              <p className="mt-3">
                To the fullest extent permitted by law, Marrache Group shall not
                be liable for any indirect, incidental, special, or
                consequential damages arising from your use of the App.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900">
                Changes to Terms
              </h2>
              <p className="mt-3">
                We reserve the right to modify these Terms at any time.
                Continued use of the App after changes constitutes acceptance of
                the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900">
                Contact
              </h2>
              <p className="mt-3">
                For questions about these Terms, contact us at{' '}
                <a
                  href="mailto:support@marrachegroup.com"
                  className="underline hover:text-gray-900"
                >
                  support@marrachegroup.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}
