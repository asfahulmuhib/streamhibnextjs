import Image from 'next/image';
const Logo = ({ className = "" }: { className?: string }) => {
return (
<div className={flex items-center ${className}}>
<Image
src="/lovable-uploads/ba22d94d-0517-4520-b7c7-e59bfb55d84b.png"
alt="StreamHib Logo"
width={100} // Placeholder, please adjust as needed
height={100} // Placeholder, please adjust as needed
className="h-16 md:h-20" // Increased the logo size even more
/>
</div>
);
};

export default Logo;
