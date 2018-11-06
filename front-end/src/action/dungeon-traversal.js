import superagent from 'superagent';
import * as routes from '../routes';

export const set = gameInfo => ({
  type: 'DUNGEON_START',
  payload: gameInfo,
});

export const start = alias => ({
  type: 'DUNGEON_MOVE',
  payload: alias,
});

export const dungeonStartRequest = () => (store) => {
  const { token } = store.getState();
  const parsedToken = JSON.parse(token);
  return superagent.get(`${API_URL}${routes.GET_ROOM_DESCRIPTION_BACKEND}`)
    .set('Authorization', `Bearer ${parsedToken.token}`)
    .then((response) => {
      return store.dispatch(set(response.body));
    })
    .catch(console.error);
};
