import Image from "next/image";

const gitList = [
  {
    title: "GitLab",
    text: "Continue with GitLab",
    avatar: "fox_white.svg",
    class: "get_started_git_button",
  },
  {
    title: "GitHub",
    text: "Continue with GitHub",
    avatar: "git_black.svg",
    class: "get_started_github_button",
  },
  {
    title: "Bitbucket",
    text: "Continue with Bitbucket",
    avatar: "code_white.svg",
    class: "get_started_bitbusket_button",
  },
];

const languages = [
  {
    title: "Typescript",
    text: "Node or TypeScript",
    avatar: "typescript.jpg",
  },
  {
    title: "Python",
    text: "Python",
    avatar: "python.jpg",
  },
  {
    title: "Go",
    text: "Go",
    avatar: "go.jpg",
  },
  {
    title: "Rust",
    text: "Rust",
    avatar: "rust.jpg",
  },
  {
    title: "Java",
    text: "Java",
    avatar: "java.jpg",
  },
  {
    title: "Swelt",
    text: "Swelt",
    avatar: "swelt.jpg",
  },
];
const GetStartted = () => {
  return (
    <section className="get_started">
      <h3>Get started now</h3>

      <div className="get_started_details">
        <div className="get_started_git">
          <h5>Connect Git repository</h5>
          <p>Select a Git provider to start with an existing project from any Git context.</p>
          <div className="get_started_git_buttons">
            {gitList?.map((lab, i) => (
              <button key={i} type="button" title={lab.title} className={lab.class}>
                <Image src={`/assets/images/started/${lab.avatar}`} alt={lab.title} title={lab.title} width={28} height={28} />
                <span> {lab.text} </span>
              </button>
            ))}
            {/* <button type="button" title="GitLab" className="get_started_git_button">
              <Image src="/assets/images/started/fox_white.svg" alt="GitLab" title="GitLab"  width={28} height={28} />
              <span> Continue with GitLab </span>
            </button>
            <button type="button" title="GitHub" className="get_started_github_button">
              <Image src="/assets/images/started/git_black.svg" alt="GitHub" title="GitHub" width={28} height={28} />
              <span> Continue with GitHub </span>
            </button>
            <button type="button" title="Bitbucket" className="get_started_bitbusket_button">
              <Image src="/assets/images/started/code_white.svg" alt="Bitbucket" title="Bitbucket" width={28} height={28} />
              <span> Continue with Bitbucket </span>
            </button> */}
          </div>
          <p>Or prefix any GitLab, GitHub or Bitbucket URL with</p>
          <button type="button" title="gitpod" className="get_started_gitpod_button">
            <span> gitpod.io/# </span>
          </button>
        </div>
        <div className="get_started_workstpace">
          <h5>Launch an example workspace</h5>
          <p>Dive into one of our example workspaces</p>
          <div className="code_list">
            {languages?.map((lang, i) => (
              <div key={i} className="code">
                <div className="code_icon">
                  <Image src={`/assets/images/started/${lang.avatar}`} alt={lang.title} title={lang.title} width={27} height={27} />
                  <p>{lang.text}</p>
                </div>
                <button type="button" title={lang.title} className="get_started_workstpace_button">
                  <span> Launch workspace </span>
                </button>
              </div>
            ))}
            {/* <div className="code">
              <div className="code_icon">
                <Image src="/assets/images/started/typescript.jpg" alt="Bitbucket" title="Bitbucket" width={27} height={27}  />
                <p>Node or TypeScript</p>
              </div>
              <button type="button" title="Bitbucket" className="get_started_workstpace_button">
                <span> Launch workspace </span>
              </button>
            </div>
            <div className="code">
              <div className="code_icon">
                <Image src="/assets/images/started/python.jpg" alt="Bitbucket" title="Bitbucket"  width={27} height={27}  />
                <p>Python</p>
              </div>
              <button type="button" title="workspace" className="get_started_workstpace_button">
                <span> Launch workspace </span>
              </button>
            </div>
            <div className="code">
              <div className="code_icon">
                <Image src="/assets/images/started/go.jpg" alt="Go" title="Go"  width={27} height={27}  />
                <p>Go</p>
              </div>
              <button type="button" title="Go" className="get_started_workstpace_button">
                <span> Launch workspace </span>
              </button>
            </div>
            <div className="code">
              <div className="code_icon">
                <Image src="/assets/images/started/rust.jpg" alt="Rust" title="BitbuRustcket" width={27} height={27}  />
                <p>Rust</p>
              </div>
              <button type="button" title="Rust" className="get_started_workstpace_button">
                <span> Launch workspace </span>
              </button>
            </div>
            <div className="code">
              <div className="code_icon">
                <Image src="/assets/images/started/java.jpg" alt="Java" title="Java"  width={27} height={27}  />
                <p>Java</p>
              </div>
              <button type="button" title="Java" className="get_started_workstpace_button">
                <span> Launch workspace </span>
              </button>
            </div>
            <div className="code">
              <div className="code_icon">
                <Image src="/assets/images/started/swelt.jpg" alt="Svelte" title="Svelte"  width={27} height={27}  />
                <p>Svelte</p>
              </div>
              <button type="button" title="Svelte" className="get_started_workstpace_button">
                <span> Launch workspace </span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartted;
