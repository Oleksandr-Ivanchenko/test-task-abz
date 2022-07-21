import React, { FC } from "react";
import './style.scss'

interface CardProps {
  email: string,
  id: number,
  name: string,
  phone: string,
  photo: string,
  position: string,
}

export const Card: FC<CardProps> = ({
  email,
  id,
  name,
  phone,
  photo,
  position,
}: CardProps) => {
  return (
    <div className="card" key={id+name}>
      <img 
        className="card__photo"
        src={photo}
        alt="person"
      />
      <div className="card__name">
        {name}
      </div>
      <div className="card__profession">
        {position}
      </div>
      <div className="card__mail">
        {email}
      </div>
      <div className="card__number">
        {phone}
      </div>
    </div>
  )
}