import { ReactNode } from 'react';

interface ConhecimentoProps {
  title: string;
  icon: ReactNode;
}

export default function ConhecimentoItem({ title, icon }: ConhecimentoProps) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2"
      data-aos="fade-up"
    >
      <p className="text-[#c0c0c0] font-bold text-lg uppercase">{title}</p>
      <div className="transition-transform duration-300 hover:text-primary hover:scale-95">
        {icon}
      </div>
    </div>
  );
}
