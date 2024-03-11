import Image from "next/image";

const Think = () => {
  return (
    <section className="think">
      <div className="think_container">
        <div className="think_details">
          <h5>Think CI/CD for dev environments</h5>
          <p className="think_description">
            We invented prebuilds so application code, configuration and infrastructure can all be stored as machine-executable code in your git repositories and applied to dev environments automatically and
            continuously.
          </p>
          <div className="think_button_group">
            <button type="button" title="Prebuilds" className="think_button_prebuilds">
              <span> More on prebuilds </span>
            </button>
            <button type="button" title="Documentation" className="think_button_docs">
              <span> Documentation </span>
            </button>
          </div>
        </div>
        <div className="think_cover">
          <Image src="/assets/images/think_code.jpg" alt="room" title="Room" width={590} height={472} />
        </div>
      </div>
    </section>
  );
};

export default Think;
