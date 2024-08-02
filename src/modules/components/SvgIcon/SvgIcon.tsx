import React from 'react';

type Props = {
  iconName: string;
};

export const SvgIcon: React.FC<Props> = ({ iconName }) => {
  const iconLink = `img/icons/sprite.svg#${iconName}`;

  return (
    <svg className="icon">
      <use href={iconLink} />
    </svg>
  );
};
