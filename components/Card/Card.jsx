import React from 'react';
import styles from '../../styles/card.module.css';
import { SiBuildkite, SiOpslevel, SiOpenaigym, SiOpenbadges, SiOpencv } from 'react-icons/si';

export const Card = ({ title, subtitle, icon }) => {
  const Icon = icon == 1 ? SiBuildkite : icon == 2 ? SiOpslevel : icon == 3 ? SiOpenaigym : icon == 4 ? SiOpenbadges : icon == 5 && SiOpencv;

  return (
    <div className='flex flex-col justify-center items-center p-3 my-3 mx-12 max-h-80 w-64'>
      <Icon size="70px" color="#EF772E" />

      <label className="text-4xl text-black font-bold mt-8 mb-6">{title}</label>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};
