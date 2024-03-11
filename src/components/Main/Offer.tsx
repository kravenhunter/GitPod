import Image from "next/image";

const Offer = () => {
  return (
    <section className='offer_container'>
      <div className='offer'>
        <h1 className='offer_title'>
          Always <br />
          Ready to Code.
        </h1>
        <p className='offer_desciption'>
          Spin up fresh, automated dev environments <br />
          for each task, in the cloud, in seconds.
        </p>
        <div className='offer_try'>
          <div className='offer_button'>
            <button type='button' title='Login' className='offer_button'>
              <span> Try Now </span>
            </button>
            <p>
              Open a workspace. <br />
              Start from any Git context.
            </p>
          </div>

          <div className='offer_icons'>
            <ul>
              <li>
                <Image
                  src='/assets/images/fox_icon.jpg'
                  alt='fox'
                  title='Fox'
                  width={29}
                  height={29}
                  priority
                />
              </li>
              <li>
                <Image
                  src='/assets/images/git_icon.jpg'
                  alt='git'
                  title='git'
                  width={29}
                  height={29}
                  priority
                />
              </li>
              <li>
                <Image
                  src='/assets/images/code.jpg'
                  alt='code'
                  title='git'
                  width={29}
                  height={29}
                  priority
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='offer_cover max-w-[630px] max-h-[652px]'>
        <Image src='/assets/images/room.jpg' width={630} height={652} alt='room' title='Room' />
      </div>
    </section>
  );
};

export default Offer;
