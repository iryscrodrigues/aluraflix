
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  margin: 20px;
  justify-content: space-around;
  
`;


const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: bolder;
  line-height: auto;
  border-radius: 30px;
  display: flex;
  padding: 20px;
  background-color: #2475DD;
  
`;

const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;

`;

const VideoImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  z-index: -1;
  border-radius: 15px;
`;

const VideoLink = styled.a`
  text-decoration: none;
  color: blue;
  margin-top: 10px;
`;

const VideoSection = ({ title, videos }) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <div>
        {videos.map(video => (
          <VideoCard key={video.id}>
            <VideoImage src={video.imagem} alt={video.titulo} />
            <h3>{video.titulo}</h3>
            <VideoLink href={video.link} target="_blank" rel="noopener noreferrer">
              Assistir
            </VideoLink>
          </VideoCard>
        ))}
      </div>
    </SectionWrapper>
  );
};

VideoSection.propTypes = {
  title: PropTypes.string.isRequired,
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      imagem: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      descricao: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VideoSection;
