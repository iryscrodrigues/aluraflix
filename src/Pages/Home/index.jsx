import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import EditForm from '../../Components/EditForm';
import Banner from '../../Components/Banner/Banner';

const VideoSection = styled.div`
  margin: 20px;
  background-color: #1B2750;
  color: #fff;
  border-radius: 10px;
  padding: 20px;
`;

const VideoCategory = styled.h2`
  text-align: start;
  margin-bottom: 20px;
  font-size: 50px;
  padding-left: 300px;
   background-color: #fff;
   color: #1B2750;
   border-radius: 40px;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 25px;
`;

const VideoCard = styled.div`
  border: 1px solid #2B4075;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  max-width: 600px;
  flex: 1 0 300px;
  background: #2B4075;
  color: #fff;
`;

const VideoImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

const VideoTitle = styled.h3`
  font-size: 1.2em;
  margin: 10px 0;
`;

const VideoDescription = styled.p`
  font-size: 1.2em;
  color: #fff;
  padding: 5px 10px;
`;

const VideoLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ActionButton = styled.button`
  margin: 5px;
  padding: 5px 10px;
  background-color: ${(props) => (props.danger ? 'red' : 'green')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.danger ? '#cc0000' : '#006400')};
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
background-color: transparent;
`;

const ModalButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: ${(props) => (props.danger ? 'red' : '#007bff')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.danger ? '#cc0000' : '#0056b3')};
  }
`;

const Home = ({ videos: initialVideos }) => {
  const [dadosDaApi, setDadosDaApi] = useState([]);
  const [videos, setVideos] = useState(initialVideos);

  useEffect(() => {
    const fetchDadosDaApi = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/iryscrodrigues/alura_api/videos');
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados da API');
        }
        const data = await response.json();
        setDadosDaApi(data);
        setVideos(prevVideos => [...prevVideos, ...data]); // Combina vídeos da API com vídeos iniciais
      } catch (error) {
        console.error('Erro ao buscar os dados da API:', error.message);
      }
    };

    fetchDadosDaApi();
  }, []);

  useEffect(() => {
    setVideos(initialVideos);
  }, [initialVideos]);

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const openModal = (video, edit = false) => {
    setSelectedVideo(video);
    setIsEditing(edit);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsEditing(false);
    setIsModalOpen(false);
  };

  const deleteVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id));
    closeModal();
  };

  const saveVideo = (updatedVideo) => {
    setVideos(videos.map(video => video.id === updatedVideo.id ? updatedVideo : video));
    closeModal();
  };

  const renderVideos = (category) => {
    return videos
      .filter(video => video.categoria === category)
      .map(video => (
        <VideoCard key={video.id}>
          <VideoImage src={video.imagem} alt={video.titulo} />
          <VideoTitle>{video.titulo}</VideoTitle>
          <VideoDescription>{video.descricao}</VideoDescription>
          <VideoLink href={video.link} target="_blank">Assistir</VideoLink>
          <ActionButton onClick={() => openModal(video, true)}>Editar</ActionButton>
          <ActionButton $danger onClick={() => openModal(video)}>Deletar</ActionButton>
        </VideoCard>
      ));
  };

  return (
    <div>
      <Banner data={dadosDaApi} />
      <VideoSection>
        <VideoCategory>Front End</VideoCategory>
         <VideoContainer>
          {renderVideos('1')}
          </VideoContainer>
      </VideoSection>
      <VideoSection>
        <VideoCategory>Back End</VideoCategory>
         <VideoContainer>
          {renderVideos('2')}
          </VideoContainer>
      </VideoSection>
      <VideoSection>
        <VideoCategory>Mobile</VideoCategory>
          <VideoContainer>
        {renderVideos('3')}
        </VideoContainer>
      </VideoSection>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit/Delete Video"
        ariaHideApp={false}
      >
        {selectedVideo && (
          <ModalContent>
            {isEditing ? (
              <EditForm
                video={selectedVideo}
                onSave={saveVideo}
                onCancel={closeModal}
              />
            ) : (
              <>
                <h2>{selectedVideo.titulo}</h2>
                <ModalButton $danger onClick={() => deleteVideo(selectedVideo.id)}>Excluir</ModalButton>
                <ModalButton onClick={closeModal}>Cancelar</ModalButton>
              </>
            )}
          </ModalContent>
        )}
      </Modal>
    </div>
  );
};

Home.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      descricao: PropTypes.string.isRequired,
      imagem: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      categoria: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default Home;
