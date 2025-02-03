import SocialLinks from "../common/SocialLinks";

const Footer = () => {
  return (
    <footer className="relative w-full h-[130px] text-[13px] z-20 bg-white">
      <div className="max-w-[900px] h-full mx-auto px-4">
        <div className="flex flex-col items-center justify-center h-full gap-3 md:flex-row">
          <p>ⓒ 2025 Jeongeun Lee. All rights reserved.</p>
          <SocialLinks viewType="links" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
