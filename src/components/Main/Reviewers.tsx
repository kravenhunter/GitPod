import Image from "next/image";

const reviewersList = [
  {
    title: "GitPod is incredibly cool.",
    comment: "In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.",
    avatar: "ben.jpg",
    name: "Ben Halpern",
    job: ` Creator and Co-founder <b>@forem</b> and <br />
        <b>@ThePracticalDev</b>`,
  },
  {
    title: "Let's say we were overwhelmed how smooth @gitpod workspaces creation & own Docker image for workspaces worked.",
    comment: "Plus, installing @code extensions from the store and integrating @gitlab CI. That blew my mind entirely, and that is hard ;",
    avatar: "Michael.jpg",
    name: "Michael Friedrich",
    job: "Developer Evangelist <b>@GitLab</b>",
  },
  {
    title: "",
    comment: `Look at any PR (pull request) in a full coding environment where you can edit, build, and test the PR code, by just prepending "gitpod.io#" to the PR URL. Super useful for reviewing/testing stuff without
        having to check it out locally!`,
    avatar: "volz.jpg",
    name: "Julius Volz",
    job: `Developer Evangelist <b>@GitLab</b>`,
  },
  {
    title: "",
    comment: `I think I’m in love with @gitpod. It’s such a powerful tool. I’ve learned so much in the past week just from stumbling across Github repos that interest me and appending “http://gitpod.io/#” to the URL.
        A+ tool all around.`,
    avatar: "hidden.jpg",
    name: "David Ressler",
    job: "Engineering Manager <b>@instagram</b>",
  },
];

const Reviewers = () => {
  return (
    <section className="reviwers">
      <h3>Used by 400,000+ developers.</h3>
      <div className="reviwers_list">
        <div className="reviwers_list_wrapper">
          {reviewersList.map((rev, i) => (
            <article key={i} className="review_card">
              {rev.title && <p>{rev.title} </p>}
              <br />
              {rev.comment && <p>{rev.comment} </p>}
              <div className="review_user">
                {rev.avatar && (
                  <div className="avatar w-[48px] h-[48px]">
                    <Image src={`/assets/images/${rev.avatar}`} alt={rev.name} title={rev.name} width={48} height={48} />
                  </div>
                )}

                <div className="review_details">
                  {rev.name && <p className="user_name">{rev.name}</p>}
                  {rev.job && <p className="user_job" dangerouslySetInnerHTML={{ __html: rev.job }}></p>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviewers;
