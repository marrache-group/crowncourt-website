import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What Apple Watch and watchOS version do I need?',
      answer:
        'CrownCourt requires watchOS 10 or newer. It works on any Apple Watch that supports watchOS 10 (Series 4 and later).',
    },
    {
      question: 'Does it work without my iPhone nearby?',
      answer:
        'Yes. CrownCourt runs fully standalone on Apple Watch. Your iPhone is only needed to sync match history through the iOS companion app.',
    },
    {
      question: 'How does the Digital Crown scoring work?',
      answer:
        'Rotate counter-clockwise to score a point for yourself, clockwise to score for your opponent. Built-in input protection prevents accidental double-scoring.',
    },
  ],
  [
    {
      question: 'Can I undo an accidental score?',
      answer:
        'Absolutely. Double-tap the screen to undo the last point. You can undo multiple times to walk back several points in a row.',
    },
    {
      question: 'What is the Noble upgrade?',
      answer:
        'Noble is a one-time in-app purchase that unlocks match history, cloud sync across your devices, player profiles, and statistics. There are no subscriptions. Noble is purchased inside the app.',
    },
    {
      question: 'Does CrownCourt track my health metrics?',
      answer:
        'Yes. CrownCourt runs as an Apple Watch workout session, so your tennis activity is automatically recorded in Apple Health.',
    },
  ],
  [
    {
      question: 'Can I use it for doubles?',
      answer:
        'Yes. CrownCourt supports both singles and doubles match selection.',
    },
    {
      question: 'What happens if my Watch battery dies mid-match?',
      answer:
        'Your match state is saved locally. When you reopen CrownCourt after charging, you can resume from where you left off.',
    },
    {
      question: 'Is my data private?',
      answer:
        'Match data is stored securely in the cloud and only accessible to your account. Health data stays on-device via HealthKit and is never shared with third parties.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Anything else?{' '}
            <a
              href="mailto:support@marrachegroup.com"
              className="text-gray-900 underline"
            >
              Reach out to us.
            </a>
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
