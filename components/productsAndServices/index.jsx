import React from 'react';
import styles from '../../styles/utils.module.css';
import { Card } from '../Card/Card';
import { products } from '../../data/products';

export const Products = () => {
  return (
    <div className="grid place-items-center h-auto, my-12 mx-0">
      <h1>Productos y servicios</h1>
      <div className="flex flex-wrap justify-around">
        {products.map((item, idx) => (
          <Card key={`${idx}`} title={item.title} subtitle={item.subtitle} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};
