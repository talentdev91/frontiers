const Letter = () => (
  <div className="letter-main">
    <div className="md:flex md:flex-row-reverse md:gap-16 letter-desc">
      <div className="self-center md:basis-1/2">
        <div className="letter-text1 mb-1">letter from the founders</div>
        <div className="letter-text2 mb-8">The Frontiers Market Family</div>
        <div className="letter-text3 mb-6">
          Through every sacrifice farmers and ranchers make to create a domestic
          food supply, the country is made more secure and independent. Without
          them, there is no United States.
        </div>
        <div className="letter-text4 mb-6">
          As we see other industries start using online marketplaces,
          automation, and other technologies, our mission is to bring these
          advances to agriculture to make farmers and ranchers more efficient,
          competitive, and profitable.
        </div>
        <div className="letter-text4 mb-8">
          Frontiers Market got our start in Austin, Texas with one goal: bring
          digital innovations to farmers and ranchers in a transparent way to
          help them keep doing their work, their way, while becoming more
          competitive in national markets.
        </div>
        <div className="letter-text5 mb-8">Frontiers Market Team</div>
      </div>
      <div aria-hidden="true" className="m-auto md:basis-1/2">
        <div className="relative m-auto">
          <img
            src="./images/letterbg.png"
            width={528}
            height={620}
            alt="imagephoto"
            sizes="(max-width: 768px)"
            className="mx-auto rounded-lg bg-gray-500 shadow-lg"
          />
        </div>
      </div>
    </div>
    <div className="letter-logo flex justify-center items-center">
      <img src="./images/logo.png" alt="logo" className="header-logo-img" />
    </div>
  </div>
);

export default Letter;
