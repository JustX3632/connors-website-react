import PageLayout from "../components/PageLayout";

const CreditsPage = (): JSX.Element => {
  return (
    <PageLayout title="Credits" subtitle="The people who made this journey possible">
      <div className="space-y-12">
        <p>
          Hello reader! I want to acknowledged the fact that I could not have
          done this by myself. If it weren't for the help of basically everyone
          listed here, I would be doomscrolling in my bed for 7 hours a day.
        </p>

        <div className="space-y-10">
          <section className="space-y-3">
            <h3 className="text-brand text-sm uppercase tracking-widest font-bold">My Parents</h3>
            <p>
              First and foremost, My parents. I literally would not be able to
              do any of this without their help. The fact that they let me do
              any of this in the first place is great. (also for the fact that
              they sponsor my financially challenged ass). Also funnily enough
              their ineptitude with technology taught me how to use it from a
              young age.
            </p>
          </section>
          {/* Remaining credit sections remain unchanged */}
          <section className="space-y-3">
            <h3 className="text-brand text-sm uppercase tracking-widest font-bold">Mr. Unterman</h3>
            <p>Mr. Unterman! I genuinely cannot find any words to express how grateful I am for everything that you have done for me. You are the best.</p>
          </section>
          <section className="space-y-3">
            <h3 className="text-brand text-sm uppercase tracking-widest font-bold">Young</h3>
            <p>Young! you have helped me immensely by inspiring my physics interest. You are also always down to yap about physics! Your help with basic calc is the best.</p>
          </section>
          <section className="space-y-3">
            <h3 className="text-brand text-sm uppercase tracking-widest font-bold">Rodrigo</h3>
            <p>Rodrigo! I would not have found out about many opportunities without your help. You always pushed me to do better, and I really wouldn't have gotten so far without your help. You also helped inspire me with physics.</p>
          </section>
          <section className="space-y-3">
            <h3 className="text-brand text-sm uppercase tracking-widest font-bold">Mr. D</h3>
            <p>Mr. D! the amount of concepts I learned through your explanations after class is great! I really appreciate your help! Also all the help with the Van de Graaff.</p>
          </section>
          <section className="space-y-3">
            <h3 className="text-brand text-sm uppercase tracking-widest font-bold">Friends</h3>
            <p>This one goes out to all my friends. I would not be as productive as I have been without the peer pressure from y'all. Also y'all keep me sane.</p>
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
