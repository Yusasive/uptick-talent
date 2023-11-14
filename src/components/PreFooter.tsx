import Button from "./Button";

interface PreFooterProps {
  heading: string;
  paragraph: string;
}

const PreFooter = ({ heading, paragraph }: PreFooterProps) => {
  return (
    <div className="sm:w-full p-28 pl-10 pr-10 bg-black text-white bg-gradient-to-t from-uptickblue80 flex items-center justify-center flex-col">
      <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
        {heading}
      </h1>
      <h6 className="pre-footer-h6">{paragraph}</h6>
      <div>
        <Button title="Contact Us" />
      </div>
    </div>
  );
};

export default PreFooter;
