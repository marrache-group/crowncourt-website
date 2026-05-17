'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

interface Review {
  title: string
  body: string
  author: string
  rating: 1 | 2 | 3 | 4 | 5
}

const reviews: Array<Review> = [
  {
    title: 'The Digital Crown is genius.',
    body: `I've tried every tennis scoring app. Nothing comes close. Rotating the crown to score feels completely natural. I forget I'm even using an app.`,
    author: 'ServeAndVolley',
    rating: 5,
  },
  {
    title: 'Finally, no more score disputes.',
    body: `My regular hitting partner and I used to argue about the score constantly. CrownCourt fixed that overnight. The score is always right there on my wrist.`,
    author: 'DoubleBreak',
    rating: 5,
  },
  {
    title: `Zero friction — that's the word.`,
    body: `I scored my entire match without once thinking about the app. That's exactly what you want. Just play tennis.`,
    author: 'AceHunter',
    rating: 5,
  },
  {
    title: 'My coach loves the match history.',
    body: `I've been sending my coach match summaries after every session. He can see exactly how I'm doing over time. Noble is worth every penny for this alone.`,
    author: 'CourtSideCoach',
    rating: 5,
  },
  {
    title: 'So clean on Apple Watch.',
    body: `The interface is beautifully designed. The always-on score is perfectly readable in direct sunlight. Looks great mid-point too.`,
    author: 'NetRusher',
    rating: 5,
  },
  {
    title: 'Undo is a lifesaver.',
    body: `I fat-fingered a point in a tight tiebreak and just double-tapped to undo. Problem solved. This feature alone makes it better than every competitor.`,
    author: 'TiebreakerKing',
    rating: 5,
  },
  {
    title: 'Best Apple Watch app, period.',
    body: `I've been playing tennis for 20 years. CrownCourt is the first app that actually gets out of the way and lets you play.`,
    author: 'ClubChampion',
    rating: 5,
  },
  {
    title: 'Works perfectly standalone.',
    body: `I went for a full practice session without my phone and the watch handled everything. Synced my match history automatically when I got back home. Magic.`,
    author: 'BaselineBrawler',
    rating: 5,
  },
  {
    title: 'Upgraded to Noble immediately.',
    body: `I downloaded the free version, played one match, and bought Noble before I even got off the court. The match history charts are incredible.`,
    author: 'DeuceQueen',
    rating: 5,
  },
  {
    title: 'The haptics are satisfying.',
    body: `Every point you score gives a little buzz. Small detail, but it makes scoring feel rewarding. My opponents always ask what app I'm using.`,
    author: 'SliceMachine',
    rating: 5,
  },
  {
    title: 'Tracks it all automatically.',
    body: `CrownCourt shows up in my Apple Health workouts automatically. No extra setup. It just works, which is rare these days.`,
    author: 'DropShotter',
    rating: 5,
  },
  {
    title: 'Deuce handling is perfect.',
    body: `I was nervous about how it would handle deuce and advantage — the answer is flawlessly. The scoring engine just works exactly as you'd expect.`,
    author: 'LoopMaster',
    rating: 5,
  },
  {
    title: 'Great for league play.',
    body: `I play in a local league and use CrownCourt for every match. My UTR has never been more accurate because my match data is finally complete.`,
    author: 'WeekendWarrior',
    rating: 5,
  },
  {
    title: 'Shows up when my phone stays in the bag.',
    body: `I hate stopping mid-match to pull out my phone. CrownCourt means my phone stays in my bag for the entire session. It's how it should be.`,
    author: 'TennisDad',
    rating: 5,
  },
]

function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }: { rating: Review['rating'] }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-[#FFD700]' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({
  title,
  body,
  author,
  rating,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'figure'>, keyof Review> & Review) {
  let [animationDelay] = useState(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  })

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className={`mt-4 text-lg/6 font-semibold before:content-['"'] after:content-['"']`}>
          {title}
        </p>
        <p className="mt-3 text-base/7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: Array<Review>
  className?: string
  reviewClassName?: (reviewIndex: number) => string
  msPerPixel?: number
}) {
  let columnRef = useRef<React.ElementRef<'div'>>(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef<React.ElementRef<'div'>>(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-196 max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Players love CrownCourt.
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Thousands of tennis players score their matches with CrownCourt every
          week.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
