interface BenefitCardProps {
  icon: any;
  title: string;
  subtitle: string;
}

const BenefitCard = ({ icon, title, subtitle }: BenefitCardProps) => {
  return (
    <div className="relative max-w-[200px] h-[100px] flex flex-col justify-start items-start">
      <div className="absolute -top-10 -left-4 flying-icon">{icon}</div>

      {/* <div className="absolute -top-10 -left-4">{icon}</div> */}

      <h4 className="text-lg font-semibold text-blue-600">{title}</h4>
      <p className="text-sm">{subtitle}</p>
    </div>
  );
};

export default BenefitCard;
