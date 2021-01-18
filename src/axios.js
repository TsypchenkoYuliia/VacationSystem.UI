import { axiosApi } from './axiosConfig';


export const getUserById = (id) => {
    return axiosApi.get('users/' + id);
};

export const getAllManagers = () => {
    return axiosApi.get('users?role=Manager');
};

export const postNewRequest = (newRequest) => {
    const {
      leaveType,
      startDate,
      endDate,
      reviewsId,
      comment,
      userId,
    } = newRequest;
    return axiosApi.post('request', {
      typeId: leaveType,
      startDate: startDate,
      endDate: endDate,
      reviewsIds: reviewsId,
      comment: comment,
      userId: userId,
    });
  };

  export const getMyReviews = () => {
    return axiosApi.get(`user/reviews`);
  };

  export const getMyRequests = () => {
    return axiosApi.get(`user/requests`);
  };

  export const getRequest = (id) => {
    return axiosApi.get(`user/request/${id}`);
  };

  export const getMyRejectedReviews = () => {
    return axiosApi.get(`user/reviews?stateId=4`);
  };

  export const getMyApprovedReviews = () => {
    return axiosApi.get(`user/reviews?stateId=3`);
  };

  export const actionReview = (review) => {
    return axiosApi.put(`user/reviews/${review.id}`, review);
  };

  export const updateRequest = (id, request) => {
    return axiosApi.put(`requests/${id}`, request);
  };