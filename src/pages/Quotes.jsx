import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Max",
    text: "Learning React is fun!",
  },
  {
    id: "q2",
    author: "Sam",
    text: "Anything can be done given enough time and determination",
  },
];

const Quotes = () => {
  return (
    <section>
      <QuoteList quotes={DUMMY_QUOTES} />
    </section>
  );
};

export default Quotes;
