import {
  AnalyticsEndPoint,
  getUserAnalyticsApi,
  getClicksAnalyticsApi,
  getMostClickedComponentsApi,
  getTemplateAnalyticsApi,
  getTemplateCountsApi,
  getComponentNamesAndClickCountApi,
  getDeviceCategoryApi
} from "../Endpoints/commonEndpoints";

import axios from "axios";

export const getUserAnalyticsFunction = async () => {
  try {
    const response = await axios.create({withCredentials:true}).get(
      `${AnalyticsEndPoint}${getUserAnalyticsApi}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getClicksAnalyticsFunction = async () => {
  try {
    const response = await axios.get(
      `${AnalyticsEndPoint}${getClicksAnalyticsApi}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getMostClickedComponentFunction = async () => {
  try {
    const response = await axios.get(
      `${AnalyticsEndPoint}${getMostClickedComponentsApi}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getTemplatesAnalyticsFunction = async () => {
  try {
    const response = await axios.get(
      `${AnalyticsEndPoint}${getTemplateAnalyticsApi}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};




export const getTemplateCounts=async ()=>{
    try {
        
        const response = await axios.get(
            `${AnalyticsEndPoint}${getTemplateCountsApi}`
          );
          return response.data;
    } catch (error) {
        return error
    }
}




export const getComponentNameAndClickCountFunction =async ()=>{
    try {
        
        const response = await axios.get(
            `${AnalyticsEndPoint}${getComponentNamesAndClickCountApi}`
          );
          return response.data;
    } catch (error) {
        return error
    }
}


export const getDeviceCategoryFunction=async ()=>{
    try {
        const response = await axios.get(
            `${AnalyticsEndPoint}${getDeviceCategoryApi}`
          );
          return response.data;
    } catch (error) {
        return error
    }
}