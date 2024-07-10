import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerContainer = styled.div`
  margin: 20px;
`;

const BannerItem = styled.div`
  position: relative;
  padding: 20px;
  text-align: center;
`;

const BannerImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 10px;
`;

const BannerCategory = styled.span`
  font-size: 4.2em;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 50px;
  color: #1B2750;
  padding: 10px;
`;

const BannerTitle = styled.h3`
  font-size: 3.5em;
  margin: 10px 0;
`;

const BannerDescription = styled.p`
  font-size: 2.5em;
  color: #fff;
  padding: 0px 300px;
`;

const SampleNextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
};

const Banner = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const getCategory = (id) => {
    switch (id) {
      case '1':
        return 'Front End';
      case '2':
        return 'Back End';
      case '3':
        return 'Mobile';
      default:
        return 'Programação';
    }
  };

  return (
    <BannerContainer>
      <Slider {...settings}>
        {data.map(item => (
          <BannerItem key={item.id}>
            <BannerImage src={item.imagem} alt={item.titulo} />
            <BannerOverlay>
              <BannerCategory>{getCategory(item.categoria)}</BannerCategory>
              <BannerTitle>{item.titulo}</BannerTitle>
              <BannerDescription>{item.descricao}</BannerDescription>
            </BannerOverlay>
          </BannerItem>
        ))}
      </Slider>
    </BannerContainer>
  );
};

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};

Banner.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      imagem: PropTypes.string.isRequired,
      descricao: PropTypes.string.isRequired,
      video: PropTypes.string.isRequired,
      categoria: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Banner;
