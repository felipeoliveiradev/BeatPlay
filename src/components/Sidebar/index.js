import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, NewPlaylist, Nav } from './styles';
import AddPlaylist from '../../assets/images/add_playlist.svg';

import Loading from '../Loading';

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
    }).isRequired,
    loading: PropTypes.bool,
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <Link to="">Radio</Link>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>Sua Biblioteca</span>
            </li>
            <li>
              <a href="">Seu Daily Mix</a>
            </li>
            <li>
              <a href="">Tocados Recentemente</a>
            </li>
            <li>
              <a href="">Albums</a>
            </li>
            <li>
              <a href="">Artistas</a>
            </li>
            <li>
              <a href="">Estações</a>
            </li>
            <li>
              <a href="">Arquivos Locais</a>
            </li>
            <li>
              <a href="">Videos</a>
            </li>
            <li>
              <a href="">Podcasts</a>
            </li>
            <li>
              <a href="">Musicas</a>
            </li>
            <li>
              <a href="">Musicas</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>PLAYLISTS</span>
              {this.props.playlists.loading && <Loading />}
            </li>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylist} alt="Adicionar Playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  playlists: state.playlists,
});
const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
