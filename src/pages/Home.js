import React from 'react';
import NavigationBar from '../components/NavigationBar';
import ProductCard from '../components/ProductCard';
const products = [
  {
    title: 'Dog Illustrator',
    isPremium: true,
    url: '/somewhere',
    img: 'soruceof theimage',
  },
  {
    title: 'Asdr Illustrator',
    isPremium: true,
    url: '/somewhere',
    img: 'soruceof theimage',
  },
  {
    title: 'Dog Illustrator',
    isPremium: false,
    url: '/somewhere',
    img: 'soruceof theimage',
  },
];
export default function Home() {
  return (
    <div>
      {products.map((product) => {
        return <ProductCard title={product.title} />;
      })}
    </div>
  );
}
