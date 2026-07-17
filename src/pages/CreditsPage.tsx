import PageLayout from "../components/PageLayout";

const CreditsPage = (): JSX.Element => {
  return (
    <PageLayout title="Credits" subtitle="The people who made this journey possible">
      <div className="space-y-12">
        <p>
          Hello, reader! I want to acknowledge that I could not have
          done this by myself. If it weren't for the help of basically everyone
          listed here, I would be doomscrolling in bed for seven hours a day.
        </p>

        <div className="space-y-10">
          <section className="space-y-3">
            <h3 className="text-brand text-sm uppercase tracking-widest font-bold">My Parents</h3>
            <p>
              First and foremost, my parents. I literally would not be able to
              do any of this without their help. The fact that they support my
              interests and help fund them means a lot to me. Funnily enough,
              helping them with technology taught me how to use it from a young
              age.
            </p>
          </section>
          {/* Remaining credit sections remain unchanged */}
          <section className="space-y-3">
            <h3 className="text-brand text-sm uppercase tracking-widest font-bold">Mr. Unterman</h3>
            <p>Mr. Unterman! I genuinely cannot find any words to express how grateful I am for everything that you have done for me. You are the best.</p>
          </section>
          <section className="space-y-3">
            <h3 className="text-brand text-sm uppercase tracking-widest font-bold">Young</h3>
            <p>Young! You have helped me immensely by inspiring my interest in physics. You are also always down to talk about physics! Your help with basic calculus has been invaluable.</p>
          </section>
          <section className="space-y-3">
            <h3 className="text-brand text-sm uppercase tracking-widest font-bold">Rodrigo</h3>
            <p>Rodrigo! I would not have discovered so many opportunities without your help. You always pushed me to do better, and I would not have come this far without you. You also helped deepen my interest in physics.</p>
          </section>
          <section className="space-y-3">
            <h3 className="text-brand text-sm uppercase tracking-widest font-bold">Mr. D</h3>
            <p>Mr. D! I learned so many concepts from your explanations after class. I really appreciate your help, especially with the Van de Graaff generator.</p>
          </section>
          <section className="space-y-3">
            <h3 className="text-brand text-sm uppercase tracking-widest font-bold">Friends</h3>
            <p>This one goes out to all my friends. I would not be as productive without the peer pressure from y'all. Y'all also keep me sane.</p>
          </section>
          <section className="space-y-3">
            <h3 className="text-brand text-sm uppercase tracking-widest font-bold">Marco</h3>
            <p>Marco! I really appreciate the help with the transformer so far! I truly believe your expertise will drastically speed up this project (and make it significantly easier for me).</p>
          </section>
          <section className="space-y-3">
            <h3 className="text-brand text-sm uppercase tracking-widest font-bold">Charlie</h3>
            <p>Charlie! Thank you for the incredible help with designing and building this website. The aesthetic and minimalism are exactly what I was looking for.</p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default CreditsPage;
