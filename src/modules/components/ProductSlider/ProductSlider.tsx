// import React, { useEffect, useState } from 'react';
// import { Section } from '../../components/Section';
// import { ProductCard } from '../../components/ProductCard';
// import { Product } from '../../../types/Product';
// import css from './ProductSlider.module.scss';
// import { SvgIcon } from '../SvgIcon';

// export const ProductSlider: React.FC = () => {
//   const [phones, setPhones] = useState<Product[] | []>([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     fetch('api/products.json')
//       .then(res => res.json())
//       .then(data => setPhones(data));
//   }, []);

//   const handlePrevClick = () => {
//     setActiveIndex(Math.max(activeIndex - 4, 0));
//   };

//   const handleNextClick = () => {
//     setActiveIndex(Math.min(activeIndex + 4, phones.length - 4));
//   };

//   const filteredPhones = phones.filter(phone => phone.category === 'phones');

//   const newModels = filteredPhones.filter(phone => phone.year === 2020);
//         console.log(newModels,"dd");

//   const otherModels = filteredPhones.filter(phone => phone.year !== 2020);

//   return (
//     <Section className={css.catalog}>
//       <div className={css.sliderBody}>
//         <h2 className={css.catalogTitle}>Brand new models</h2>
//         <ul className={css.catalogList}>
//           {phones.slice(activeIndex, activeIndex + 4).map(phone => (
//             <li key="phone.id" className={css.productItem}>
//               <ProductCard {...phone} />
//             </li>
//           ))}
//         </ul>
//         <div className={css.buttonsContainer}>
//           <button className={css.sliderButtons} onClick={handlePrevClick}>
//             <SvgIcon iconName="arrowLeft" />
//           </button>
//           <button className={css.sliderButtons} onClick={handleNextClick}>
//             <SvgIcon iconName="arrowRight" />
//           </button>
//         </div>
//       </div>
//     </Section>
//   );
// };
// ProductSlider.tsx

import React, { useEffect, useState } from 'react';
import { Section } from '../../components/Section';
import { Product } from '../../../types/Product';
import { SliderComponent } from './SliderComponent';
import css from './ProductSlider.module.scss';

type ProductSliderProps = {
  title: string;
};
export const ProductSlider: React.FC<ProductSliderProps> = ({ title }) => {
  const [phones, setPhones] = useState<Product[]>([]);

  useEffect(() => {
    fetch('api/products.json')
      .then(res => res.json())
      .then(data => setPhones(data));
  }, []);

  const filteredPhones = phones.filter(phone => phone.category === 'phones');

  const newModels = filteredPhones.filter(phone => phone.year === 2022);

  const otherModels = filteredPhones.filter(phone => phone.year !== 2022);

  return (
    <>
      {title === 'Brand new models' ? (
        <Section className={css.catalog}>
          <SliderComponent title="Brand new models" products={newModels} />
        </Section>
      ) : (
        <Section className={css.catalog}>
          <SliderComponent title="Hot prices" products={otherModels} />
        </Section>
      )}
    </>
  );
};
