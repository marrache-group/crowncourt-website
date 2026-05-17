import { type Metadata } from 'next'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPage() {
  return (
    <div className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: April 2026</p>

          <div className="mt-10 space-y-8 text-sm text-gray-700">
            <section>
              <h2 className="text-base font-semibold text-gray-900">
                Introduction
              </h2>
              <p className="mt-3">
                CrownCourt (&ldquo;we&rdquo;, &ldquo;our&rdquo;,
                &ldquo;us&rdquo;) respects your privacy. This Privacy Policy
                explains how we collect, use, and protect your information when
                you use our watchOS and iOS applications.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900">
                Information We Collect
              </h2>
              <div className="mt-3 space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">
                    Account Information
                  </h3>
                  <p className="mt-1">
                    When you sign in with Apple, we receive your Apple ID
                    identifier and, optionally, your name and email address. We
                    use secure authentication to manage your account.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Match Data</h3>
                  <p className="mt-1">
                    When you use CrownCourt to score tennis matches, we store
                    match results (scores, date, duration) in secure cloud
                    storage to provide match history and sync between devices.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Health Data</h3>
                  <p className="mt-1">
                    CrownCourt can record tennis workouts via Apple HealthKit.
                    Health data is stored only on your device and in Apple
                    Health. We do not transmit health data to our servers.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Profile Information
                  </h3>
                  <p className="mt-1">
                    You may optionally provide a display name, UTR rating, and
                    contact information. This is stored securely and used to
                    personalize your experience.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900">
                How We Use Your Information
              </h2>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>To provide and improve the CrownCourt service</li>
                <li>
                  To sync match history between your Apple Watch and iPhone
                </li>
                <li>To display your player profile</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900">
                Data Storage and Security
              </h2>
              <p className="mt-3">
                Your data is stored in secure cloud storage with access rules
                that restrict access to your own data only. All data is
                transmitted over encrypted connections (HTTPS/TLS).
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900">
                Third-Party Services
              </h2>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>
                  <strong>Sign in with Apple</strong> — account management
                </li>
                <li>
                  <strong>Apple HealthKit</strong> — workout tracking
                  (on-device only)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900">
                Your Rights
              </h2>
              <p className="mt-3">
                You can delete your account and all associated data at any time
                from the app settings. Contact us at{' '}
                <a
                  href="mailto:support@marrachegroup.com"
                  className="underline hover:text-gray-900"
                >
                  support@marrachegroup.com
                </a>{' '}
                for any privacy-related requests.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900">
                Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes through the app.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900">
                Contact
              </h2>
              <p className="mt-3">
                If you have questions about this Privacy Policy, contact us at{' '}
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
