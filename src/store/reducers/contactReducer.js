// import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  contacts: [
    {
      "firstName": "Ken",
      "lastName": "Hensly",
      "email": "ken@hensly.com",
      "phone": "+040(27)325-4583",
      "id": 1655139846400
    },
    {
      "firstName": "Mick",
      "lastName": "Box",
      "email": "mick@box.com",
      "phone": "+040(27)325-4585",
      "id": 1655140068073
    }
  ]
}

export default function contactReducer(state = initialState, {type, payload}){
  switch(type){
    default: return state;
  }
}
