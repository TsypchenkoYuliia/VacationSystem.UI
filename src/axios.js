import { axiosApi } from './axiosConfig';


export const getUserById = (id) => {
    return axiosApi.get('users/' + id);
};

export const getAllManagers = () => {
    return axiosApi.get('users?role=Manager');
};

export const getUsersByFilter = (name, role) => {
  return axiosApi.get(`users?name=${name}&role=${role}`);
};

export const getStatistic = () => {
  return axiosApi.get(`statistics`);
};

export const getStatisticById = (id) => {
  return axiosApi.get(`statistics/`+ id);
};

export const getMyRequestsByFilter = (startDate, endDate, stateId, typeId) => {
  return axiosApi.get(`user/requests?startDate=${startDate}&endDate=${endDate}&stateId=${stateId}&typeId=${typeId}`);
};

export const getMyReviewsByFilter = (startDate, endDate, stateId, typeId, name) => {
  return axiosApi.get(`user/reviews?startDate=${startDate}&endDate=${endDate}&stateId=${stateId}&typeId=${typeId}&name=${name}`);
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

  export const deleteRequest = (id) => {
    return axiosApi.delete(`user/request/${id}`);
  };

  export const getUser = (id) => {
    return axiosApi.get(`account/${id}`);
  };

  export const UpdateUser = (user) => {
    return axiosApi.put(`account`, user);
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

  export const getUsers = () => {
    return axiosApi.get(`account`);
  };

  export const postNewUser = (user) => {
    const {
      firstName,
      lastName,
      email,
      password,
      role,
      phone
    } = user;
    return axiosApi.post(`account`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role: role,
      phoneNumber: phone,
    });
  };