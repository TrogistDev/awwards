import Button from "./Button";

const Contact = () => {
  const ImageClipBox = ({ src, clipPath }) => {
    return (
      <div className={clipPath}>
        <img src={src} />
      </div>
    );
  };

  return (
    <div className="my-20 min-h-96 w-screen px-10" id="contact">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="img/contact-1.webp"
            clipPath="contact-clip-path-1 "
          />
          <ImageClipBox
            src="img/contact-2.webp"
            clipPath="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>
        <div className="absolute -top-40 left-20  w-60  sm:top-1/2 lg:left-170 md:left-150 lg:top-20 xl:left-400 lg:w-80">
          <ImageClipBox
            src="img/swordman-partial.webp"
            clipPath="absolute md:scale-125"
          />
          <ImageClipBox
            src="img/swordman.webp"
            clipPath="sword-man-clip-path md:scale-125"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general uppercase text-[10px]">Join Zentry</p>
          <p className="special-font m-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem">
            Let&apos;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming
            t<b>o</b>gether
          </p>
          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default Contact;
