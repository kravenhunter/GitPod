import Image from "next/image";

const Companies = () => {
  return (
    <section className="companies">
      <div className="covers">
        <Image className="max-w-[95px] max-h-[42px]" src="/assets/images/companies/gitlab.jpg" alt="gitlab" title="Gitlab" width={95} height={42} priority />
        <Image className="max-w-[130px] max-h-[16px]" src="/assets/images/companies/freecodCamp.jpg" alt="freecodCamp" title="freecodCamp" width={130} height={16} priority />
        <Image className="max-w-[124px] max-h-[82px]" src="/assets/images/companies/wave.jpg" alt="wave" title="wave" width={124} height={82} priority />
        <Image className="max-w-[86px] max-h-[29px]" src="/assets/images/companies/Goocle.jpg" alt="google" title="google" width={86} height={29} priority />
        <Image className="max-w-[86px] max-h-[26px]" src="/assets/images/companies/amazone.jpg" alt="amazone" title="amazone" width={86} height={26} priority />
        <Image className="max-w-[95px] max-h-[18px]" src="/assets/images/companies/facebook.jpg" alt="facebook" title="facebook" width={95} height={18} priority />
        <Image className="max-w-[95px] max-h-[33px]" src="/assets/images/companies/Uber.jpg" alt="facebook" title="facebook" width={95} height={33} priority />
        <Image className="max-w-[138px] max-h-[37px]" src="/assets/images/companies/openAi.jpg" alt="openAi" title="openAi" width={138} height={37} priority />
        <Image className="max-w-[76px] max-h-[50px]" src="/assets/images/companies/Intel.jpg" alt="Intel" title="Intel" width={76} height={50} priority />
        <Image className="max-w-[105px] max-h-[15px]" src="/assets/images/companies/THEIA.jpg" alt="THEIA" title="THEIA" width={105} height={15} priority />
        <Image className="max-w-[95px] max-h-[42px]" src="/assets/images/companies/code_institute.jpg" alt="code_institute" title="code_institute" width={95} height={42} priority />
        <Image className="max-w-[86px] max-h-[30px]" src="/assets/images/companies/4geeks.jpg" alt="4geeks" title="4geeks" width={86} height={30} priority />
      </div>
    </section>
  );
};

export default Companies;
