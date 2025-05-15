import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-[70px] h-[70px] overflow-hidden rounded-full">
      <Image 
        src="/images/logo1.png" 
        width={70} 
        height={70} 
        alt="logo"
        className="rounded-full object-cover w-full h-full"
      />
    </div>
  );
};

export default Logo;
