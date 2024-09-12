import {
  AnalyticsEndPoint,
  getUserAnalyticsApi,
  getClicksAnalyticsApi,
  getMostClickedComponentsApi,
  getTemplateAnalyticsApi,
} from "../Endpoints/commonEndpoints";

import axios from "axios";

export const getUserAnalyticsFunction = async () => {
  try {
    const response = await axios.get(
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

const getMostClickedComponentFunction = async () => {
  try {
    const response = await axios.get(
      `${AnalyticsEndPoint}${getMostClickedComponentsApi}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

const getTemplatesAnalyticsFunction = async () => {
  try {
    const response = await axios.get(
      `${AnalyticsEndPoint}${getTemplateAnalyticsApi}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};


