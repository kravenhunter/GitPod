import Image from "next/image";

const Secure = () => {
  return (
    <section className="secure">
      <h3 className="secure_title">Remote-first. Secure by design.</h3>
      <div className="secure_cover">
        <Image src="/assets/images/secure.jpg" alt="gitpod" title="Gitpod" width={1315} height={867} />
      </div>

      <p className="secure_details">
        You no longer need an over-powered laptop to code, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser. Gitpod centralizes all source code and never stores it on insecure machines and
        networks.
      </p>
      <div className="secure_buttons_group">
        <div className="secure_button_wrapper">
          <button type="button" title="Chrome" className="secure_button_chrom">
            <Image src="/assets/images/chrom_icon.jpg" alt="chrom" title="Chrom Extention" width={24} height={24} />
            <span> Chrome Extension </span>
          </button>
        </div>
        <div className="secure_button_wrapper">
          <button type="button" title="Documentation" className="secure_button_firefox">
            <Image src="/assets/images/firefox_icon.jpg" alt="firefox" title="Firefox Extention" width={24} height={24} />
            <span> Firefox Extension </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Secure;
