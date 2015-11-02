import $ from 'jquery';
import APP_ID from './parseInfo';
import API_KEY from './parseInfo';

$.ajaxSetup({
  headers:{
    X-Parse-Application-Id: APP_ID,
    X-Parse-REST-API-Key: API_KEY
  }
});