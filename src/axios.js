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

