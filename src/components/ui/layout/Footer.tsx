import Image from "next/image";
import Link from "next/link";

const gtiPod = [
  {
    path: "#",
    title: "Features",
  },
  {
    path: "#",
    title: "Pricing",
  },
  {
    path: "#",
    title: "Changelog",
  },
  {
    path: "#",
    title: "Self-Hosted",
  },
  {
    path: "#",
    title: "Gitpod vs GitHub",
  },
  {
    path: "#",
    title: "Codespaces",
  },
  {
    path: "#",
    title: "Status",
  },
];

const developer = [
  {
    path: "#",
    title: "Getting started",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "#",
    title: "Documentation",
  },
  {
    path: "#",
    title: "Report a bug",
  },
  {
    path: "#",
    title: "Community",
  },
];

const company = [
  {
    path: "#",
    title: "About",
  },

  {
    path: "#",
    title: "Careers",
  },
  {
    path: "#",
    title: "Contact",
  },
  {
    path: "#",
    title: "Media Kit",
  },
];

const legal = [
  {
    path: "#",
    title: "Imprint",
  },

  {
    path: "#",
    title: "Terms of Service",
  },
  {
    path: "#",
    title: "Privacy Policy",
  },
];
const Footer = () => {
  return (
    <footer className="footer_wrapper">
      <div className="footer_content">
        <div className="footer_links">
          <ul>
            <li>
              <h6>Gitpod</h6>
            </li>
            {gtiPod?.map((git, i) => (
              <li key={i}>
                <Link href={git.path} title={git.title}>
                  {git.title}
                </Link>
              </li>
            ))}
          </ul>

          <ul>
            <li>
              <h6>Developer</h6>
            </li>
            {developer?.map((dev, i) => (
              <li key={i}>
                <Link href={dev.path} title={dev.title}>
                  {dev.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <h6>Company</h6>
            </li>
            {company?.map((com, i) => (
              <li key={i}>
                <Link href={com.path} title={com.title}>
                  {com.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <h6>Legal</h6>
            </li>
            {legal?.map((leg, i) => (
              <li key={i}>
                <Link href={leg.path} title={leg.title}>
                  {leg.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="copyright">
          <div className="copyright_logo">
            <Image src="/assets/images/footer_logo.svg" alt="Footer Logo" title="Logo" width={24} height={24} />

            <p>Copyright ©2021 Gitpod</p>
          </div>
          <div className="socials">
            <Link href="#" title="twitter">
              <Image src="/assets/images/twitter.svg" alt="twitter" title="twitter" width={24} height={24} />
            </Link>
            <Link href="#" title="git">
              <Image src="/assets/images/gir_yellow.svg" alt="git" title="git" width={24} height={24} />
            </Link>
            <Link href="#" title="mesenger">
              <Image src="/assets/images/mesenger.svg" alt="mesenger" title="mesenger" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className="cookies">
        <p>This website uses cookies to enhance the user experience. Read our privacy policy for more info.</p>

        <button type="button" title="Cookies" className="cookies_button">
          <span> Accept Cookies </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
