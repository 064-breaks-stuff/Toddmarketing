import { useId, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import '../../styles/google-reviews.css';

const reviews = [
  {
    id: 'oliver-lathrop',
    author: 'Oliver Lathrop',
    text: 'Sam took the time to understand my business and delivered a smart, creative strategy that got real results.'
  },
  {
    id: 'taylor-bierbrodt',
    author: 'Taylor Bierbrodt',
    text: 'Sam is an excellent communicator and does great work!'
  },
  {
    id: 'jadon-hostettler',
    author: 'Jadon Hostettler',
    text: 'The online world can be extremely complicated to market, no matter the size of your business. Sam does a fabulous job giving a business not only a plan or a strategy, but also tips and tricks on how to make your business pop in a busy online atmosphere. Highly recommend his services, as we will continue to use them.'
  },
  {
    id: 'lindsay-huehns',
    author: 'Lindsay Huehns',
    text: 'I’ve collaborated with social 1st marketing multiple times now, and they are the best in the area. They are knowledgeable, and detailed in their work, highly recommend for any marketing needs!'
  },
  {
    id: 'jacob-todd',
    author: 'Jacob Todd',
    text: 'Sam’s superior service has helped accelerate my business to the next level multiple times, I couldn’t recommend him enough!'
  },
  {
    id: 'travis-mckinney',
    author: 'Travis McKinney',
    text: "Sam is a fantastic professional in the Marketing space! He's been a wonderful resource and it's evident that he's passionate about his craft. Listening to Sam talk, it sounds like he has social media marketing down to a formula for results."
  }
];

export default function GoogleReviewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselId = useId();
  const headingId = `${carouselId}-heading`;
  const instructionsId = `${carouselId}-instructions`;
  const slideId = `${carouselId}-slide`;

  const activeReview = reviews[activeIndex];

  const showPreviousReview = () => {
    setActiveIndex(
      (currentIndex) => (currentIndex - 1 + reviews.length) % reviews.length
    );
  };

  const showNextReview = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % reviews.length);
  };

  const handleKeyDown = (event) => {
    if (
      event.target !== event.currentTarget ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey
    ) {
      return;
    }

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        showPreviousReview();
        break;
      case 'ArrowRight':
        event.preventDefault();
        showNextReview();
        break;
      case 'Home':
        event.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setActiveIndex(reviews.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <section
      className="google-reviews"
      aria-labelledby={headingId}
      aria-describedby={instructionsId}
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="container">
        <div className="google-reviews__heading">
          <div>
            <p className="section-label">Google reviews</p>
            <h2 id={headingId}>In their own words.</h2>
          </div>

          <p className="google-reviews__introduction">
            Selected reviews of Sam and Social 1st Marketing.
          </p>
        </div>

        <p
          className="google-reviews__instructions"
          id={instructionsId}
        >
          Use the review controls below. When this carousel is focused, use
          the left and right arrow keys to change reviews.
        </p>

        <div
          className="google-reviews__slide"
          id={slideId}
          aria-live="polite"
          aria-atomic="true"
        >
          <figure
            className="google-reviews__review"
            role="group"
            aria-roledescription="slide"
            aria-label={`Review ${activeIndex + 1} of ${reviews.length}`}
            key={activeReview.id}
          >
            <Quote
              className="google-reviews__quote-icon"
              size={32}
              strokeWidth={1.5}
              aria-hidden="true"
            />

            <blockquote className="google-reviews__quote">
              <p>{activeReview.text}</p>
            </blockquote>

            <figcaption className="google-reviews__attribution">
              <span className="google-reviews__author">
                {activeReview.author}
              </span>
              <span className="google-reviews__source">
                Google review
              </span>
            </figcaption>
          </figure>
        </div>

        <div className="google-reviews__controls">
          <div className="google-reviews__navigation">
            <button
              className="google-reviews__arrow"
              type="button"
              aria-label="Show previous review"
              aria-controls={slideId}
              onClick={showPreviousReview}
            >
              <ArrowLeft size={18} aria-hidden="true" />
              <span>Previous</span>
            </button>

            <p className="google-reviews__position">
              <span>{String(activeIndex + 1).padStart(2, '0')}</span>
              <span aria-hidden="true"> / </span>
              <span>{String(reviews.length).padStart(2, '0')}</span>
            </p>

            <button
              className="google-reviews__arrow"
              type="button"
              aria-label="Show next review"
              aria-controls={slideId}
              onClick={showNextReview}
            >
              <span>Next</span>
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>

          <div
            className="google-reviews__selectors"
            role="group"
            aria-label="Choose a review"
          >
            {reviews.map((review, index) => (
              <button
                className={`google-reviews__selector${
                  activeIndex === index ? ' is-active' : ''
                }`}
                type="button"
                key={review.id}
                aria-label={`Show review ${index + 1} of ${
                  reviews.length
                } by ${review.author}`}
                aria-current={activeIndex === index ? 'true' : undefined}
                aria-controls={slideId}
                onClick={() => setActiveIndex(index)}
              >
                <span aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}