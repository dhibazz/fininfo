import axios from "axios";
import {
  GET_OFFERS,
  GET_OFFERS_FAIL,
  GET_OFFERS_SUCCESS,
  ADD_NEW_OFFER,
  ADD_OFFER_SUCCESS,
  ADD_OFFER_FAIL,
  UPDATE_OFFER,
  UPDATE_OFFER_SUCCESS,
  UPDATE_OFFER_FAIL,
  DELETE_OFFER,
  DELETE_OFFER_SUCCESS,
  DELETE_OFFER_FAIL,
} from "./actionTypes"

const baseURL = "http://localhost:8080/api/Offre";

// Get Offers

export const getOffers = ( ) => {
  
  return (dispatch) => {
    fetch(`http://localhost:8080/api/Offre/getAllOffres`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) =>  dispatch(getOffersSuccess(actualData)))
    .catch((err) => {
      dispatch(getOffersFail(err));
    });
  };
};



export const getOffersSuccess = Offer => ({
  type: GET_OFFERS_SUCCESS,
  payload: Offer,
})
export const getOffersFail = error => ({
  type: GET_OFFERS_FAIL,
  payload: error,
})

// Add Offer

export const addNewOffer = Offer => ({
  type: ADD_NEW_OFFER,
  payload: Offer,
})

export const addOfferSuccess = Offer => ({
  type: ADD_OFFER_SUCCESS,
  payload: Offer,
})

export const addOfferFail = error => ({
  type: ADD_OFFER_FAIL,
  payload: error,
})

// Update Offer

export const updateOffer = Offer => ({
  type: UPDATE_OFFER,
  payload: Offer,
})

export const updateOfferSuccess = Offer => ({
  type: UPDATE_OFFER_SUCCESS,
  payload: Offer,
})

export const updateOfferFail = error => ({
  type: UPDATE_OFFER_FAIL,
  payload: error,
})

// Delete Offer

export const deleteOffer = offer => ({
  type: DELETE_OFFER,
  payload: offer,
})

export const deleteOfferSuccess = offer => ({
  type: DELETE_OFFER_SUCCESS,
  payload: offer,
})

export const deleteOfferFail = error => ({
  type: DELETE_OFFER_FAIL,
  payload: error,
})
