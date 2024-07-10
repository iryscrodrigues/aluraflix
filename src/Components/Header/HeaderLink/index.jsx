
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkEstilizado = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12vw;
  height: 4vw;
  font-size: 1.39vw;
  font-weight: bold;
  text-decoration: none;
  border-radius: 2.0vw;

  background-color: ${(props) => (props.$ativo ? "#2F4379" : "transparent")};
  border: ${(props) =>
    props.$ativo ? ".14vw solid #2271D1" : ".14vw solid #FFF"};
  color: ${(props) => (props.$ativo ? "#2271D1" : "#FFF")};
  box-shadow: ${(props) => (props.$ativo ? "inset 0 0 .7vw .05vw #2271d1" : "")};

  &:hover {
    color: #FFF;
  }
`;

function HeaderLink({ url, children }) {
  const resolvedPath = useResolvedPath(url);
  const ehAtivo = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <LinkEstilizado to={url} $ativo={ehAtivo}>
      {children}
    </LinkEstilizado>
  );
}

HeaderLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HeaderLink;
