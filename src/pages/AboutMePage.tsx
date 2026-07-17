import PageLayout from "../components/PageLayout";

const AboutMePage = (): JSX.Element => {
  return (
    <PageLayout title="About Me" subtitle="Lifelong Learner">
      <div className="space-y-16">
        <section className="space-y-6">
          <p>
            Hello, reader! I'm Connor. I hope to become a physicist and have a
            deep interest in both theoretical and experimental fields. I created
            this website in my freshman year of high school to document my
            journey through the world of physics and beyond.
          </p>
          <p>
            You can reach me at{" "}<a
              href="mailto:connor@connorphysics.org"
              className="text-brand border-b border-brand/20 pb-0.5 hover:border-brand transition-all"
            >
              connor@connorphysics.org
            </a>
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand/40 font-bold">
            As a Person
          </h2>
          <div className="space-y-6">
            <p>
              I like to do a lot of things. I watch movies, TV, and anime. I
              listen to music and read, though not as much as I should. I have
              played the violin for five years, though not as well as I would
              like, and I am also active in kickboxing. I enjoy making and
              wearing cosplay props.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand/40 font-bold">
            Current Media I Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-brand text-sm font-medium italic">Reading</h3>
              <p className="text-sm">The Way of Kings by Brandon Sanderson</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-brand text-sm font-medium italic">Cinema</h3>
              <p className="text-sm">
                Lord of the Rings (the greatest story ever told)
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-brand text-sm font-medium italic">Anime</h3>
              <p className="text-sm">Bungo Stray Dogs</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-brand text-sm font-medium italic">Music</h3>
              <p className="text-sm">Fellowship (Power Metal)</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-brand text-sm font-medium italic">Gaming</h3>
              <p className="text-sm">Clair Obscur: Expedition 33</p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand/40 font-bold">
            What I Like
          </h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-brand text-sm font-medium italic">Books</h3>
              <p className="text-sm">
                I love fantasy. The Six of Crows duology is great. I've also
                enjoyed The Dresden Files and Eragon. I liked the first third
                of the Mistborn series by Brandon Sanderson. Send me
                recommendations!
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-brand text-sm font-medium italic">Film</h3>
              <p className="text-sm">
                The Lord of the Rings is the greatest film series ever made. I
                recently watched both Project Hail Mary and Interstellar, and I
                loved them both.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AboutMePage;
