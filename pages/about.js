import Layout from "../components/layout";

export default function About() {
  return (
    <Layout pageName="About">
      <h2>OnlyDans is your number one resource for Dan content.</h2>
      <div className="py-4">
        <p>
          <strong>OnlyDans</strong> was created with Dan in mind. From day one,
          this project was built to give his legions of adoring fans the most
          unfiltered access to Dan's daily life. Whether he's wrangling wires in
          his big, heavy, coveralls, out on the town in his best dress sweats,
          or relaxing at the beach, OnlyDans allows Dan to connect with you.
          Browse Dan's latest posts, watch a video, or shoot Dan message. It's
          all possible with OnlyDans!
        </p>
      </div>
    </Layout>
  );
}
