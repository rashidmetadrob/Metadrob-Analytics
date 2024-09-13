import { BaseUrl } from "../Base_Url/axios.baseUrl";

export const AnalyticsEndPoint: string = `${BaseUrl}/analytics`;

export const getUserAnalyticsApi = "/getUserAnalytics";

export const getClicksAnalyticsApi = "/getClickAnalytics";

export const getMostClickedComponentsApi = "/getMostClickedComponent";

export const getTemplateAnalyticsApi = "/getTemplateAnalytics";

export const getTemplateCountsApi='/getTemplateCount'

export const getComponentNamesAndClickCountApi='/getComponentNameAndCount'

export const getDeviceCategoryApi='/getDeviceCategory'