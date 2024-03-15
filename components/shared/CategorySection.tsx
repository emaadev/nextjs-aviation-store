import Image from "next/image";

interface CategoryComponentProps {
  title: string;
  subtitle: string;
  textLink: string;
  href: string;
  image: any;
}

const CategoryComponent = ({
  title,
  subtitle,
  textLink,
  href,
  image,
}: CategoryComponentProps) => {
  return (
    <div className="group relative w-[90%] lg:w-[30%] h-[500px] hover:w-full transition-all duration-300">
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 group-hover:bg-black/60 transition-all" />

      <div className="absolute top-1/3 left-0 p-6 text-white">
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className="text-lg italic mb-4">{subtitle}</p>
        <a href={href} className="hover:underline italic">
          {textLink}
        </a>
      </div>

      <Image
        src={image}
        className="w-full h-full object-cover"
        alt="Category Image"
      />
    </div>
  );
};

export default CategoryComponent;
